import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      tap(() => console.log('Effect Triggered: loadUsers$')),
      mergeMap(() =>
        this.http.get<any[]>('http://localhost:4000/api/meetings/pages').pipe(
          tap(users => console.log('API Response:', users)),
          map(users => loadUsersSuccess({ users })),
          catchError(error => {
            console.error('API Error:', error);
            return of(loadUsersFailure({ error: error.message }));
          })
        )
      )
    )
  );
}
