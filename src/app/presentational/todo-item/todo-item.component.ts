import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentCommunicationService } from '../../services/component-communication.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: any;
  @Output() markedAsDone = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor(
    private readonly componentCommunicationService: ComponentCommunicationService
  ) {}

  ngOnInit(): void {}

  markAsDone(item: any) {
    this.markedAsDone.emit(item);
  }

  deleteTodo(item: any) {
    this.componentCommunicationService.deleteTodo(item);
  }
}
