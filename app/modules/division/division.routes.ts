/**
 * Created by colinjlacy on 7/18/16.
 */
import { ClientRouterConfig } from '../../app.models';
import { BaseComponent } from './base.component';
import { DivisionComponent } from './division.component';
import { PercentageComponent } from './percentage.component';
import { ModulusComponent } from './modulus.component';

export const divisionRoutes: ClientRouterConfig = [
  {name: 'Division', mainNav: true, path: 'division', component: BaseComponent, children: [
    {name: 'Standard', mainNav: false, path: '', component: DivisionComponent},
    {name: 'Percentage', path: 'percentage', component: PercentageComponent},
    {name: 'Modulus', path: 'modulus', component: ModulusComponent}
  ]}
];
