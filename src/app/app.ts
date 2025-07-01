import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [HeaderComponent, RouterOutlet],
})
export class App {}
