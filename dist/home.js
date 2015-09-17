System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
    'use strict';

    var inject, HttpClient, Home;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_fetch) {}],
        execute: function () {
            Home = (function () {
                function Home(http) {
                    _classCallCheck(this, _Home);

                    this.filter = '';
                    this.packages = [];

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;
                }

                _createClass(Home, [{
                    key: 'activate',
                    value: function activate() {
                        var _this = this;

                        return this.http.fetch('https://api.github.com/repos/jspm/registry/contents/registry.json').then(function (response) {
                            return response.json();
                        }).then(function (response) {
                            return JSON.parse(atob(response.content));
                        }).then(function (packages) {
                            var keys = Object.keys(packages);

                            var urls = {
                                github: 'github.com',
                                npm: 'npmjs.com'
                            };

                            var mapped = keys.map(function (key) {
                                var item = packages[key];
                                var split = item.split(':');

                                return {
                                    key: key,
                                    distro: split[0],
                                    source: packages[key],
                                    url: urls[split[0]] + '/' + split[1]
                                };
                            });

                            _this.persistPackages(mapped);
                        })['catch'](function (e) {
                            if (e.status === 304 || 403) {
                                var packages = window.localStorage.getItem('cached_packages');

                                if (packages) {
                                    _this.persistPackages(JSON.parse(packages), false);
                                }
                            }
                        });
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        var _this2 = this;

                        this.packagesToggle.addEventListener('click', function (e) {
                            var item = e.target;

                            if (item.tagName === 'A') {
                                _this2.filter = item.dataset.sort;

                                document.querySelector('.active').classList.remove('active');
                                item.classList.add('active');

                                e.preventDefault();
                            }
                        });
                    }
                }, {
                    key: 'persistPackages',
                    value: function persistPackages(packages) {
                        var cache = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

                        packages.sort(function (a, b) {
                            var sortA = a.key.toUpperCase();
                            var sortB = b.key.toUpperCase();
                            return sortA < sortB ? -1 : sortA > sortB ? 1 : 0;
                        });
                        this.packages = packages;

                        if (cache) {
                            window.localStorage.setItem('cached_packages', JSON.stringify(this.packages));
                        }
                    }
                }]);

                var _Home = Home;
                Home = inject(HttpClient)(Home) || Home;
                return Home;
            })();

            _export('Home', Home);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QUFDLGNBQWMsRUFBRSxDQUFDOzZCQUN0Qjt5QkFDSixDQUFDLENBQUM7cUJBQ047OzsyQkFFYyx5QkFBQyxRQUFRLEVBQWM7NEJBQVosS0FBSyx5REFBQyxJQUFJOztBQUNoQyxnQ0FBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDcEIsZ0NBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsZ0NBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsbUNBQU8sQUFBQyxLQUFLLEdBQUcsS0FBSyxHQUFJLENBQUMsQ0FBQyxHQUFHLEFBQUMsS0FBSyxHQUFHLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN6RCxDQUFDLENBQUM7QUFDSCw0QkFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0FBRXpCLDRCQUFJLEtBQUssRUFBRTtBQUNQLGtDQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3lCQUNqRjtxQkFDSjs7OzRCQTlFUSxJQUFJO0FBQUosb0JBQUksR0FEaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLElBQUksS0FBSixJQUFJO3VCQUFKLElBQUkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAnZmV0Y2gnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gICAgZmlsdGVyID0gJyc7XG4gICAgcGFja2FnZXMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHApIHtcbiAgICAgICAgaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgIGNvbmZpZy51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9qc3BtL3JlZ2lzdHJ5L2NvbnRlbnRzL3JlZ2lzdHJ5Lmpzb24nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IEpTT04ucGFyc2UoYXRvYihyZXNwb25zZS5jb250ZW50KSkpXG4gICAgICAgIC50aGVuKHBhY2thZ2VzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYWNrYWdlcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybHMgID0ge1xuICAgICAgICAgICAgICAgIGdpdGh1YjogJ2dpdGh1Yi5jb20nLFxuICAgICAgICAgICAgICAgIG5wbTogICAgJ25wbWpzLmNvbSdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBtYXBwZWQgPSBrZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gcGFja2FnZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXQgPSBpdGVtLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJvOiBzcGxpdFswXSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBwYWNrYWdlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybHNbc3BsaXRbMF1dICsgJy8nICsgc3BsaXRbMV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3RvcmUgYW5kIGNhY2hlIHRoZSBwYWNrYWdlc1xuICAgICAgICAgICAgdGhpcy5wZXJzaXN0UGFja2FnZXMobWFwcGVkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuc3RhdHVzID09PSAzMDQgfHwgNDAzKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIHRoZSBjYWNoZSBmb3IgcGFja2FnZXNcbiAgICAgICAgICAgICAgICBsZXQgcGFja2FnZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhY2hlZF9wYWNrYWdlcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhY2thZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHBhY2thZ2VzLCBidXQgZG9uJ3QgY2FjaGUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0UGFja2FnZXMoSlNPTi5wYXJzZShwYWNrYWdlcyksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLnBhY2thZ2VzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiAoaXRlbS50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlciA9IGl0ZW0uZGF0YXNldC5zb3J0O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBlcnNpc3RQYWNrYWdlcyhwYWNrYWdlcywgY2FjaGU9dHJ1ZSkge1xuICAgICAgICBwYWNrYWdlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgc29ydEEgPSBhLmtleS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHNvcnRCID0gYi5rZXkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiAoc29ydEEgPCBzb3J0QikgPyAtMSA6IChzb3J0QSA+IHNvcnRCKSA/IDEgOiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYWNrYWdlcyA9IHBhY2thZ2VzO1xuXG4gICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWNoZWRfcGFja2FnZXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBhY2thZ2VzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=