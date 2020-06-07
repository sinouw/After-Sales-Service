import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {

  navIsOpened: boolean=true;
  isAdmin: any;
  adminMenuItemsList : string[] =  ["Profile","Services","Reclamations","Go to site"]
  selectedCompName : string =""

  constructor() {}
    ngOnInit() {
     
    }


}
