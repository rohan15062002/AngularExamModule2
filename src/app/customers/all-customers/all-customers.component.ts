import { Component } from '@angular/core';
import { CustomerItemComponent } from '../customer-item/customer-item.component';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-all-customers',
  standalone: true,
  imports: [CustomerItemComponent],
  templateUrl: './all-customers.component.html',
  styleUrl: './all-customers.component.css',
})
export class AllCustomersComponent {
  constructor(private customerService: CustomersService) {}

  get customers() {
    console.log(this.customerService.getAllCustomers());
    return this.customerService.getAllCustomers();
  }
}
