import 'bootstrap';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .globalResources([
            'filter-array'
        ])
        .developmentLogging();

    aurelia.start().then(a => a.setRoot());
}
