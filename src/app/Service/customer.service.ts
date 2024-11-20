import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModule } from '../Module/customer.module';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  apiUrl: string =
    'https://projectapi.gerasim.in/api/PropertyBookingController/';

  getCustomer() {
    return this.http.get(`${this.apiUrl}GetAllCustomer`);
  }

  addCustomer(customerObj: CustomerModule) {
    return this.http.post(`${this.apiUrl}AddCustomer`, customerObj);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.apiUrl}/DeleteCustomerById?id=${id}`);
  }

  updateCustomer(data: CustomerModule) {
    return this.http.put(`${this.apiUrl}UpdateCustomer`, data);
  }
}
