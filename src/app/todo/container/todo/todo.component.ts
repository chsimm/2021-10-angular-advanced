import { Component, OnInit } from '@angular/core';
import { Todo } from '../../services/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
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

  deleteTodo(itemToDelete: Todo): void {
    this.todoService.deleteTodo(itemToDelete).subscribe(() => {
      this.items = this.items.filter((item) => item.id !== itemToDelete.id);
    });
  }

  markAsDone(item: Todo): void {
    item.done = !item.done;
    this.todoService.updateTodo(item).subscribe(() => console.log('updated'));
  }
}
