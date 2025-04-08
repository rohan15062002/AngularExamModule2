import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-add-customers',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './add-customers.component.html',
  styleUrl: './add-customers.component.css',
})
export class AddCustomersComponent {
  constructor(
    private customerService: CustomersService,
    private authService: AuthService,
    private router: Router
  ) {}

  newCustomerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.newCustomerForm.invalid) {
      alert('Form is invalid');
      return;
    }
    const id = Math.random().toString();
    console.log(this.newCustomerForm.value);

    this.customerService.addCustomer({
      id: id!,
      name: this.newCustomerForm.value.name!,
      email: this.newCustomerForm.value.email!,
      phoneNumber: this.newCustomerForm.value.phoneNumber!,
      address: this.newCustomerForm.value.address!,
      addedByUser: this.authService.getUserName()!,
    });

    this.newCustomerForm.reset();
    this.router.navigate(['/']);
  }
}
