import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './view-customer-details.component.html',
  styleUrl: './view-customer-details.component.css'
})
export class ViewCustomerDetailsComponent {
  id!: string | null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    console.log(this.id)
  }

  constructor(
    private customerService: CustomersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  get customerDetails() {
    return this.customerService.getAllCustomers().find((c) => c.id === this.id);
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  onDelete() {
    this.customerService.deleteCustomer(this.id!);
    this.router.navigate([""]);
  }

  onEdit(){
    return this.router.navigate(["edit",this.id!])
  }
}
