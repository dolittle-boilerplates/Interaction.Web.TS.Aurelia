import { inject } from 'aurelia-dependency-injection';

const CommandCoordinator = require('@dolittle/commands').CommandCoordinator;
const QueryCoordinator = require('@dolittle/queries').QueryCoordinator;

@inject(CommandCoordinator, QueryCoordinator)
export class home {

  constructor(private _commandCoordinator: any, private _queryCoordinator: any) {}
}
