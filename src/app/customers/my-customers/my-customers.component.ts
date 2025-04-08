import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CustomerItemComponent } from '../customer-item/customer-item.component';

@Component({
  selector: 'app-my-customers',
  standalone: true,
  imports: [CustomerItemComponent],
  templateUrl: './my-customers.component.html',
  styleUrl: './my-customers.component.css'
})
export class MyCustomersComponent {
  constructor(private customerService: CustomersService) {}

  get myCustomers() {
    return this.customerService.getMyCustomers();
  }
}
