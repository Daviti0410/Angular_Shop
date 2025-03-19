import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

// Feature selector
export const selectUsersState = createFeatureSelector<UsersState>('users');

// Individual selectors
export const selectAllUsers = createSelector(selectUsersState, state => state.users);
export const selectLoading = createSelector(selectUsersState, state => state.loading);
export const selectError = createSelector(selectUsersState, state => state.error);
