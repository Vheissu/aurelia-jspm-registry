import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Home {
    filter = '';
    packages = [];

    constructor(http) {
        http.configure(config => {
            config.useStandardConfiguration();
        });

        this.http = http;
    }

    activate() {
        return this.http.fetch('https://api.github.com/repos/jspm/registry/contents/registry.json')
        .then(response => response.json())
        .then(response => JSON.parse(atob(response.content)))
        .then(packages => {
            const keys = Object.keys(packages);

            const urls  = {
                github: 'github.com',
                npm:    'npmjs.com'
            };

            let mapped = keys.map(key => {
                let item = packages[key];
                let split = item.split(':');

                return {
                    key: key,
                    distro: split[0],
                    source: packages[key],
                    url: urls[split[0]] + '/' + split[1]
                }
            });

            // Store and cache the packages
            this.persistPackages(mapped);
        })
        .catch(e => {
            if (e.status === 304 || 403) {
                // Search the cache for packages
                let packages = window.localStorage.getItem('cached_packages');

                if (packages) {
                    // Store packages, but don't cache again
                    this.persistPackages(JSON.parse(packages), false);
                }
            }
        });
    }

    attached() {
        this.packagesToggle.addEventListener('click', e => {
            let item = e.target;

            if (item.tagName === 'A') {
                this.filter = item.dataset.sort;

                document.querySelector('.active').classList.remove('active');
                item.classList.add('active');

                e.preventDefault();
            }
        });
    }

    persistPackages(packages, cache=true) {
        packages.sort((a, b) => {
            let sortA = a.key.toUpperCase();
            let sortB = b.key.toUpperCase();
            return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
        });
        this.packages = packages;

        if (cache) {
            window.localStorage.setItem('cached_packages', JSON.stringify(this.packages));
        }
    }
}
