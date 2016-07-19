/**
 * Created by colinjlacy on 7/18/16.
 */
import { ClientRouterConfig } from '../../app.models';
import { SubtractionComponent } from './subtraction.component';

export const subtractionRoutes: ClientRouterConfig = [
  {name: 'Subtraction', mainNav: true, path: 'subtraction', component: SubtractionComponent}
];
