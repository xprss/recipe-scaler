import { Component, signal } from '@angular/core';
import { SharedModule } from './components/shared/shared-module';
import { IngredientsModule } from './components/ingredients/ingredients-module';
import { Title } from './components/shared/title/title';
import { Scale } from './components/shared/scale/scale';
import { NewIngredient } from './components/ingredients/new-ingredient/new-ingredient';
import { IngredientsContainer } from './components/ingredients/ingredients-container/ingredients-container';
import { Brain } from './brain';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    IngredientsModule,
    Title,
    Scale,
    NewIngredient,
    IngredientsContainer,
    TranslateModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
  constructor(private brain: Brain, private translate: TranslateService) {
    translate.addLangs(['it-IT', 'en-US']);
    translate.setFallbackLang('it-IT');
    const browserLang = translate.getBrowserLang();
    translate.use(['it-IT', 'en-US'].includes(browserLang ?? "") ? (browserLang ?? "it-IT") : 'it-IT');
  }
}
