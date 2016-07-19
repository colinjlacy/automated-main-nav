/**
 * Created by colinjlacy on 7/18/16.
 */
import { ClientRouterConfig } from '../../app.models';
import { DivisionComponent } from './division.component';
import { PercentageComponent } from './percentage.component';
import { ModulusComponent } from './modulus.component';

export const divisionRoutes: ClientRouterConfig = [
  {name: 'Division', mainNav: true, path: 'division', component: DivisionComponent},
  {name: 'Percentage', mainNav: false, path: 'percentage', component: PercentageComponent},
  {name: 'Modulus', path: 'modulus', component: ModulusComponent}
];
