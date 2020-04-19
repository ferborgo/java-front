import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mostrarSidebar = true;

  constructor() { }

  ngOnInit() {
  }

  onToggle(event) {
    this.mostrarSidebar = ! this.mostrarSidebar;
  }
}
