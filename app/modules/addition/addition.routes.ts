/**
 * Created by colinjlacy on 7/18/16.
 */
import { ClientRouterConfig } from '../../app.models';
import { AdditionComponent } from './addition.component';

export const additionRoutes: ClientRouterConfig = [
  {name: 'Addition', mainNav: true, path: 'addition', component: AdditionComponent}
];
