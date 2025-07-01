import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import 'zone.js'; // Asegúrate de importar zone.js

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
