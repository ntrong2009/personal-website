import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<div (click)="click()">click</div>`,
})
export class HomeComponent {
  title = 'dashboard';

  constructor(private route: Router) {

  }

  click() {
    this.route.navigate(['/resume']);
  }
}