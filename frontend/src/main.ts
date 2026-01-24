import { bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'body'
        }
      }
    })
  ]
}).catch((err) => console.error(err));
