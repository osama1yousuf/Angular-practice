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
  div2show : string = "Yes"
  handleDiv1(isShow: boolean) {
    console.log('function handleDiv1', this.isShowDiv1);
    this.isShowDiv1 = isShow;
  }
}
