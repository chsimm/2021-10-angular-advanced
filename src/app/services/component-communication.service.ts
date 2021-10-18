import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentCommunicationService {
  currentTodo$ = new BehaviorSubject(null);
  private deleteTodoSub = new Subject();

  get deleteTodo$() {
    return this.deleteTodoSub.asObservable();
  }

  deleteTodo(item: any) {
    this.deleteTodoSub.next(item);
  }
}
