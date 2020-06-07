import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  isConnected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token')
    if(token)
    this.isConnected = true;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);  
  }

}
