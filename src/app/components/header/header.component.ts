import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {heroArrowDownCircle } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-header',
  imports: [NgIcon],
  providers: [provideIcons({ heroArrowDownCircle })],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
