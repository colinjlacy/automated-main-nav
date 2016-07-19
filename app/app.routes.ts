/**
 * Created by colinjlacy on 7/18/16.
 */
import { provideRouter }  from '@angular/router';

import { ClientRouterConfig } from './app.models';
import { AppRoot } from './core-components/root.component';
import { additionRoutes } from './modules/addition/addition.routes';
import { subtractionRoutes } from './modules/subtraction/subtraction.routes';
import { multiplicationRoutes } from './modules/multiplication/multiplication.routes';
import { divisionRoutes } from './modules/division/division.routes';

export const calculatorRoutes: ClientRouterConfig = [
  {name: 'Home', mainNav: true, path: '', component: AppRoot},
  ...additionRoutes,
  ...subtractionRoutes,
  ...multiplicationRoutes,
  ...divisionRoutes
];

export const appRouterProviders = [
  provideRouter(calculatorRoutes)
];
