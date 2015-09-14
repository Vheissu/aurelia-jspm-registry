export class App {
  configureRouter(config, router){
    config.title = 'Aurelia JSPM Registry';
    config.map([
      { route: [''], name: 'home', moduleId: 'home', nav: true, title:'Home' }
    ]);

    this.router = router;
  }
}
