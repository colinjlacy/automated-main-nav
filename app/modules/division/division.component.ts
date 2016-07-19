/**
 * Created by colinjlacy on 7/18/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'division',
  template: `
  <h2>&lt;div&gt;</h2>
  <a [routerLink]="['/percentage']">Percentage</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class DivisionComponent {}
