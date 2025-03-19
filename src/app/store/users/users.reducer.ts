import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

export interface UsersState {
  users: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
