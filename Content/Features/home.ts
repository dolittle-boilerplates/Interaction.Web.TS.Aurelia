import { inject } from 'aurelia-dependency-injection';

import { CommandCoordinator } from '@dolittle/commands';
import { QueryCoordinator } from '@dolittle/queries';

@inject(CommandCoordinator, QueryCoordinator)
export class home {

  private _commandCoordinator: any;
  private _queryCoordinator: any;

  constructor(commandCoordinator: CommandCoordinator, queryCoordinator: QueryCoordinator) {
    this._commandCoordinator = commandCoordinator;
    this._queryCoordinator = queryCoordinator;
  }
}
