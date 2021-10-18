import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RestService } from '../../shared/rest/rest.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'todos/';

  constructor(private readonly http: RestService) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}${this.url}`);
  }

  addTodo(value: any): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}${this.url}`, value);
  }

  deleteTodo(item: Todo): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${this.url}${item.id}`);
  }

  updateTodo(newItem: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${environment.apiUrl}${this.url}${newItem.id}`,
      newItem
    );
  }
}
