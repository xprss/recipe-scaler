import { bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideTranslateService, TranslateCompiler } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'body',
        },
      },
    }),
    provideTranslateService({
      defaultLanguage: 'it-IT',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
  ],
}).catch((err) => console.error(err));
