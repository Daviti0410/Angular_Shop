import { createAction, props } from '@ngrx/store';

// Load users
export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: any[] }>());
export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: string }>());
