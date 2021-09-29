import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-lt-md',
  templateUrl: './header-lt-md.component.html',
  styleUrls: ['./header-lt-md.component.css'],
})
export class HeaderLtMdComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.sidenav.emit();
  }
}
