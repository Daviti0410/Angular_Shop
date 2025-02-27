import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {AppMainComponent} from './components/app-main/app-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AppMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-shop';
}
