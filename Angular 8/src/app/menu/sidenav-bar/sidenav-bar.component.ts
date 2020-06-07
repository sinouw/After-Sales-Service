import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) {}
    ngOnInit() {
     
    }

    onLogout() {
      localStorage.removeItem('token');
      this.router.navigate(['/user/login']);  
    }

}
