import { Injectable } from '@angular/core';
import CUSTOMER_DATA from './customers.data';
import { Customer } from '../app.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = CUSTOMER_DATA;
  myCustomers: Customer[]=[]

  constructor(private authService: AuthService) { 
    const customers = this.getCustomersFromLocalStorage();
    const myCustomers = this.getMyCustomersFromLocalStorage(
      this.authService.getUserId()
    );
    if (customers) {
      this.customers = customers;
    }
    if (myCustomers) {
      this.myCustomers = myCustomers;
    }
  }

  saveCustomersToLocalStorage(){
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  saveMyCustomerToLocalStorage(userId: string): void {
    localStorage.setItem(userId, JSON.stringify(this.myCustomers));
  }

  getCustomersFromLocalStorage(): Customer[] | undefined {
    if (!localStorage.getItem('customers')) {
      return;
    }
    return JSON.parse(localStorage.getItem('customers')!);
  }

  getMyCustomersFromLocalStorage(userId: string): Customer[] {
    if (!localStorage.getItem(userId)) {
      return [];
    }
    return JSON.parse(localStorage.getItem(userId)!);
  }
  
  addCustomer(customer:Customer){
    this.customers.push(customer);
    this.myCustomers.push(customer);
    this.saveCustomersToLocalStorage();
    this.saveMyCustomerToLocalStorage(this.authService.getUserId());
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  getMyCustomers(): Customer[]{
    const userName = this.authService.getUserName();
    return this.myCustomers.filter((c)=>c.addedByUser===userName)
    // return this.myCustomers;
  }

  deleteCustomer(id: string): void {
    this.customers = this.customers.filter((c) => c.id !== id);
    this.myCustomers = this.myCustomers.filter((c) => c.id !== id);
    this.saveCustomersToLocalStorage();
    this.saveMyCustomerToLocalStorage(this.authService.getUserId());
  }

  updateCustomer(customer:Customer){
    this.customers=this.customers.map((NewCustomer)=>(NewCustomer.id==customer.id? customer : NewCustomer))
    this.saveCustomersToLocalStorage();
  }
}
