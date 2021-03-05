import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('openClose', [
     transition(':enter', [
      style({ opacity: 0 }),
      animate('250ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('100ms', style({ opacity: 0 }))
    ]),
  ])
  ]
})
export class HeaderComponent implements OnInit {
  showNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleNav() {
    this.showNav = !this.showNav;
  }

  get icon():string {

    return this.showNav ? "close" : "menu";
  }
}
