import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
