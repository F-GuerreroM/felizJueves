// 1. IMPORTAR ZONE.JS BASE (¡Esta es la línea que te falta!)
import 'zone.js'; 

// 2. Importar la parte de testing
import 'zone.js/testing'; 

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Inicializar el entorno
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);