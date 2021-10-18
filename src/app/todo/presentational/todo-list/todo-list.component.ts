import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() items: any[] = [];

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
