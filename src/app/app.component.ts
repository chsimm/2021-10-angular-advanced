import { Component, OnInit } from '@angular/core';
import { Todo } from './services/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Todo[] = [];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((items: any[]) => {
      this.items = items;
    });
  }

  addTodo(value: Todo): void {
    this.todoService.addTodo(value).subscribe((item) => this.items.push(item));
  }

  deleteTodo(item: Todo): void {
    this.todoService.deleteTodo(item).subscribe(() => {
      this.items = this.items.filter((item) => item);
    });
  }

  markAsDone(item: Todo): void {
    item.done = !item.done;
    this.todoService.updateTodo(item).subscribe(() => console.log('updated'));
  }
}
