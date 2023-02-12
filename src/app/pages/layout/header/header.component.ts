import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly router: Router) {}

  public loggedUser = '';

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('user');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth', 'login']);
  }
}
