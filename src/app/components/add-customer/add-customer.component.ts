import { Component, inject, OnInit } from '@angular/core';
import { CustomerModule } from '../../Module/customer.module';
import { CustomerService } from '../../Service/customer.service';
import {
  FormBuilder,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { InputFieldRFComponent } from '../../ReusableComponents/input-field-rf/input-field-rf.component';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputFieldRFComponent,
    ButtonComponent,
  ],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss',
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      custId: [0],
      name: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      address: [''],
    });
  }

  customerServ = inject(CustomerService);

  customerFormSubmit() {
    console.log(
      'customerForm',
      this.customerForm.errors,
      this.customerForm.value
    );
    if (this.customerForm.valid) {
      this.customerServ
        .addCustomer(this.customerForm.value)
        .subscribe((res: any) => {
          if (res?.result) {
            this.customerForm.reset();
            alert(res.message);
          } else {
            alert(res.message);
          }
        });
    } else {
      alert('Please fill required field');
    }
  }
}
