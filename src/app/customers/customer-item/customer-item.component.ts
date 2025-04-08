import { Component, Input } from '@angular/core';
import { Customer } from '../../app.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-item.component.html',
  styleUrl: './customer-item.component.css',
})
export class CustomerItemComponent {
  constructor(private authService: AuthService, private router: Router) {}

  @Input({ required: true }) customer!: Customer;

  get isAdmin() {
    return this.authService.isAdmin();
  }

  onView() {
    console.log(this.customer.id);
    return this.router.navigate(['view', this.customer.id]);
  }

  onEdit() {
    return this.router.navigate(['edit', this.customer.id]);
  }
}
