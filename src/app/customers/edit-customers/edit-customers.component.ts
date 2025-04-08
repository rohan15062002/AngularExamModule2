import { Component } from '@angular/core';
import { Customer } from '../../app.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-customers',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './edit-customers.component.html',
  styleUrl: './edit-customers.component.css'
})
export class EditCustomersComponent {
  customer!: Customer | null;
  editFormGroup!: FormGroup;

  constructor(
    private customerService: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.customer = this.customerService.getAllCustomers().find((c) => c.id === id) || null;

    
    const editFormGroup = new FormGroup({
      id: new FormControl(this.customer?.id),
      name: new FormControl(this.customer?.name, Validators.required),
      email: new FormControl(this.customer?.email,Validators.required),
      phoneNumber: new FormControl(this.customer?.phoneNumber,Validators.required),
      address: new FormControl(this.customer?.address,Validators.required),
    });

    this.editFormGroup = editFormGroup;
    console.log(this.editFormGroup)
  }

  // isFormDirty():boolean {
  //   return (
  //     JSON.stringify(this.customer) ===
  //     JSON.stringify({
  //       id: this.editFormGroup.value.id||
  //       name: this.editFormGroup.value.name||
  //       email: this.editFormGroup.value.email||
  //       phoneNumber: this.editFormGroup.value.phoneNumber||
  //       address: this.editFormGroup.value.address||
  //     })
  //   );
  // }

  isFormDirty(): boolean {
    return (
      this.editFormGroup.value.name !== this.customer?.name ||
      this.editFormGroup.value.email !== this.customer?.email ||
      this.editFormGroup.value.phoneNumber !== this.customer?.phoneNumber ||
      this.editFormGroup.value.address !== this.customer?.address 
    );
  }

  onSubmit() {
    this.customerService.updateCustomer({
      id: this.editFormGroup.value.id!,
        name: this.editFormGroup.value.name!,
        email: this.editFormGroup.value.email!,
        phoneNumber: this.editFormGroup.value.phoneNumber!,
        address: this.editFormGroup.value.address!,
        addedByUser: null
    });

    this.router.navigate(['/'], { replaceUrl: true });
  }
}
