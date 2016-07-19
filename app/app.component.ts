import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ClientHeaderComponent } from './core-components/header.component';

@Component({
    selector: 'my-app',
    template: `
    <client-header></client-header>
    <main class="container-fluid">
      <router-outlet></router-outlet>
    </main>
    `,
    directives: [ClientHeaderComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
