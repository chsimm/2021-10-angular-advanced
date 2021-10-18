import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: any;
  @Output() markedAsDone = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markAsDone(item: any) {
    this.markedAsDone.emit(item);
  }

  deleteTodo(item: any) {
    this.deleted.emit(item);
  }
}
