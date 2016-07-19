/**
 * Created by colinjlacy on 7/18/16.
 */
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { calculatorRoutes } from '../app.routes';
import { ClientRouterConfig, ClientRoute } from '../app.models';

@Component({
  selector: 'client-header',
  template: `
      <header>
          <nav class='navbar navbar-sticky-top navbar-dark bg-inverse'>
              <span class='navbar-brand'>I Wish My Nav Was Automated</span>
              <ul class='nav navbar-nav pull-xs-right'>
                  <li class='nav-item' *ngFor='let route of routes'>
                      <a class='nav-link' [routerLink]="['/' + route.path]">{{route.name}}</a>
                  </li>
              </ul>
          </nav>
      </header>
  `,
  directives: [NgFor, ROUTER_DIRECTIVES]
})
export class ClientHeaderComponent {
  public routes:ClientRouterConfig;

  constructor() {
    this.routes = this.findNavRoutes(calculatorRoutes);
  }

  private findNavRoutes(arrayOfRoutes:ClientRouterConfig) {
    let returnArray:ClientRouterConfig = [];
    arrayOfRoutes.forEach((route:ClientRoute) => {
      if (route.mainNav) {
        returnArray.push(route);
      }
    });
    return returnArray;
  }
}
