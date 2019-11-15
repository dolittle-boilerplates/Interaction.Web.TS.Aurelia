import { inject } from 'aurelia-dependency-injection';

const CommandCoordinator = require('@dolittle/commands').CommandCoordinator;
const QueryCoordinator = require('@dolittle/queries').QueryCoordinator;

@inject(CommandCoordinator, QueryCoordinator)
export class home {

  private _commandCoordinator: any;
  private _queryCoordinator: any;

  constructor(commandCoordinator: any, queryCoordinator: any) {
    this._commandCoordinator = commandCoordinator;
    this._queryCoordinator = queryCoordinator;
  }
}
