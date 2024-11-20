import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipies',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    JsonPipe,
    PercentPipe,
    SlicePipe
  ],
  templateUrl: './pipies.component.html',
  styleUrl: './pipies.component.scss',
})
export class PipiesComponent {
  name: string = 'waQas';
  date: Date = new Date();
  amount: number = 3545.565;
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };
  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];
  myString: string = 'This is a long string.';
}
