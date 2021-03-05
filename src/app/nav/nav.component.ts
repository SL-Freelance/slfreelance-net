import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() toggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggle.emit();
  }

}