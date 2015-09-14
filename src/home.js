import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Home {
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
        .then(packages => {
            let keys = Object.keys(packages);

            const urlMap  = {
                github: 'github.com',
                npm:    'npmjs.com'
            };

            let mapped = keys.map(key => {
                let split = packages[key].split(':');

                return {
                    key: key,
                    distro: split[0],
                    source: packages[key],
                    url: urlMap[split[0]] + '/' + split[1]
                }
            });

            this.packages = mapped;
        });
    }
}
