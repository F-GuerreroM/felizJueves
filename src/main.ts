import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import 'zone.js';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
