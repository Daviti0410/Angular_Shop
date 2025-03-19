import {Component, inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars2 } from '@ng-icons/heroicons/outline';
import { AsyncPipe, NgIf, CommonModule } from '@angular/common';
import { AppState } from '../../store/app.state';
import { loadUsers } from '../../store/users/users.actions';
import { selectAllUsers, selectLoading, selectError } from '../../store/users/users.selector';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-main',
  imports: [NgIcon, AsyncPipe, NgIf, CommonModule, HeaderComponent],
  providers: [provideIcons({ heroBars2 })],
  standalone: true,
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.scss'
})
export class AppMainComponent {
  private store = inject(Store<AppState>);

  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);



  ngOnInit() {
    // Dispatch action to fetch users from API
    console.log('Dispatching loadUsers action');
    this.store.dispatch(loadUsers());
  }
}
