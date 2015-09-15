import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Home {
    original_packages = [];
    packages          = [];

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

            this.packages          = mapped;
            this.original_packages = mapped;
        });
    }

    search(val) {
        if (val.length) {
            this.packages = this.original_packages.filter(obj => {
                return obj.key.search(new RegExp(val, 'gi')) >= 0;
            });
        } else {
            this.packages = this.original_packages;
        }
    }
}
