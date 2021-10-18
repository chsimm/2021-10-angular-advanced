import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentCommunicationService {
  private deleteTodoSub = new Subject();

  get deleteTodo$() {
    return this.deleteTodoSub.asObservable();
  }

  deleteTodo(item: any) {
    this.deleteTodoSub.next(item);
  }
}
