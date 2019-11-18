import { autoinject } from 'aurelia-dependency-injection';

import {CommandCoordinator} from '@dolittle/commands';
import {QueryCoordinator} from '@dolittle/queries';

@autoinject
export class Home {
  constructor(private _commandCoordinator: CommandCoordinator, private _queryCoordinator: QueryCoordinator) {}
}
