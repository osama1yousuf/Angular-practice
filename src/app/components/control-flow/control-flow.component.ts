import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  isShowDiv1: boolean = true;
  div2show: string = 'Yes';
  dayVal: string = 'Mon';

  cityNames: string[] = [
    'karachi',
    'lahore',
    'Peshawar',
    'Quetta',
    'Islamabad',
    'GB',
  ];

  employees = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Software Engineer',
      department: 'Development',
      email: 'alice.johnson@example.com',
      salary: 75000,
      active: true,
    },
    {
      id: 2,
      name: 'Bob Smith',
      position: 'Product Manager',
      department: 'Product',
      email: 'bob.smith@example.com',
      salary: 85000,
      active: true,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      position: 'UX Designer',
      department: 'Design',
      email: 'charlie.brown@example.com',
      salary: 70000,
      active: false,
    },
    {
      id: 4,
      name: 'Diana Prince',
      position: 'Marketing Specialist',
      department: 'Marketing',
      email: 'diana.prince@example.com',
      salary: 60000,
      active: true,
    },
    {
      id: 5,
      name: 'Edward Green',
      position: 'Data Analyst',
      department: 'Analytics',
      email: 'edward.green@example.com',
      salary: 65000,
      active: false,
    },
  ];

  handleDiv1(isShow: boolean) {
    console.log('function handleDiv1', this.isShowDiv1);
    this.isShowDiv1 = isShow;
  }
}
