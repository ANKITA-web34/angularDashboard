import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // isExpanded = true;
  showSubMenuCustomer: boolean = false;
  showSubMenuAgent: boolean = false;
  showSubMenuOrder:boolean = false;
  
  toggleButton:boolean = false;
  toggleButtonCustomer:boolean = false;
  toggleButtonOrder:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  matIconButton() {
    this.toggleButton = !this.toggleButton;
  }

  matIconButtonForCustomer() {
    this.toggleButtonCustomer = !this.toggleButtonCustomer;
  }

  matIconButtonForOrder() {
    this.toggleButtonOrder = !this.toggleButtonOrder;
  }

 
}
