import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  practiceName: string = 'Angular Practice';
  noOfHoursRequired: number = 5;
  fieldType = 'text';
  fieldValue: string = '';

  handleChange(event: Event) {
    console.log('event', (event.target as HTMLTextAreaElement).value);
    alert('Onchange Work' + (event.target as HTMLTextAreaElement).value);
  }
  handleClick(e: string) {
    alert('Event Binding Work ' + e);
  }
}
