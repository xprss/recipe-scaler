import { Component } from '@angular/core';
import { Brain } from '../../../brain';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scale',
  imports: [FormsModule],
  templateUrl: './scale.html',
  styleUrl: './scale.scss',
})
export class Scale {
  constructor(protected brain: Brain) {}

  decreasePortions() {
    this.brain.scaleDown();
  }

  increasePortions() {
    this.brain.scaleUp();
  }
}
