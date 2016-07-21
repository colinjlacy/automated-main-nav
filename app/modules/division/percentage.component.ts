/**
 * Created by colinjlacy on 7/18/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'percentage',
  template: `
  <h2>"It's about 90% done"</h2>
  <a [routerLink]="['/division/modulus']">Modulus</a>
  `,
  directives: [ROUTER_DIRECTIVES]

})
export class PercentageComponent {}
