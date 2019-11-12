import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class app {
  router: any;
  constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;
    config.map([{ route: '', name: 'Home', moduleId: PLATFORM.moduleName('home') }]);

    this.router = router;
  }
}
