import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter();
  @ViewChild('input') input: any;

  constructor() {}

  ngOnInit(): void {}

  addTodo(): void {
    this.todoAdded.emit({
      value: this.input.nativeElement.value,
    });
  }
}
