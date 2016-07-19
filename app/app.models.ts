/**
 * Created by colinjlacy on 7/18/16.
 */
import { Route } from '@angular/router';

export interface ClientRoute extends Route {
  name: string,
  mainNav?: boolean
}

export declare type ClientRouterConfig = ClientRoute[];
