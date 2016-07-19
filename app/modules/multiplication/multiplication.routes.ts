/**
 * Created by colinjlacy on 7/18/16.
 */
import { ClientRouterConfig } from '../../app.models';
import { MultiplicationComponent } from './multiplication.component';

export const multiplicationRoutes: ClientRouterConfig = [
  {name: 'Multiplication', mainNav: true, path: 'multiplication', component: MultiplicationComponent}
];
