import { Component } from '@angular/core';
import { Brain } from '../../../brain';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-scale',
  imports: [FormsModule, ButtonModule, TranslateModule, InputTextModule, FloatLabelModule],
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
