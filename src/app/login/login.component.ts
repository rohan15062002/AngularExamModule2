import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
   })
   
   constructor(private authSevice: AuthService){}

   onClick(){
    const res = this.authSevice.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
    if (!res) {
      alert('Invalid email or password');
      this.loginForm.reset();
    }

   }
}
