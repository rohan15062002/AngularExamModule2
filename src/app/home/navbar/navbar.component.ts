import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   constructor(
    private authServie:AuthService
   ){}

   get isAdmin(){
    return this.authServie.isAdmin();
   }

   logoutUser(){
    this.authServie.logoutUser();
   }

}
