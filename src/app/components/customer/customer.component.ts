import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../Service/customer.service';
import { CustomerModule } from '../../Module/customer.module';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  customerObj = new CustomerModule();

  customerList: CustomerModule[] = [];

  customerServ = inject(CustomerService);

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerServ
      .getCustomer()
      .subscribe((res: any) => (this.customerList = res?.data));
  }

  customerFormSubmit(customerForm: NgForm) {
    if (!customerForm.valid) {
      alert('Please fill in all required fields.');
      return;
    }
    if (this.customerObj.custId !== 0) {
      this.customerServ
        .updateCustomer(this.customerObj)
        .subscribe((res: any) => {
          if (res.result) {
            alert(res.message);
            this.getCustomers();
            customerForm.resetForm();
            this.customerObj.custId = 0;
          } else {
            alert(res.message);
          }
        });
    } else {
      this.customerServ.addCustomer(this.customerObj).subscribe((res: any) => {
        if (res?.result) {
          this.getCustomers();
          customerForm.resetForm();
          this.customerObj.custId = 0;
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
    }
  }

  deleteCustomer(id: number) {
    let confirm = window.confirm('Are you sure');
    if (confirm) {
      this.customerServ.deleteCustomer(id).subscribe((res: any) => {
        if (res.result) {
          this.getCustomers();
          alert(res?.message);
        } else {
          alert(res?.message);
        }
      });
    }
  }

  editCustomer(data: CustomerModule) {
    this.customerObj = { ...data };
  }
}
