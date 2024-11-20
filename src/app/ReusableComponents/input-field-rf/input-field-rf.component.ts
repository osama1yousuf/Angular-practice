import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field-rf',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './input-field-rf.component.html',
  styleUrl: './input-field-rf.component.scss',
})
export class InputFieldRFComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';


}
