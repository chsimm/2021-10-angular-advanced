import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any[] = [];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((items: any[]) => {
      this.items = items;
    });
  }

  addTodo(value: any): void {
    this.todoService.addTodo(value).subscribe((item) => this.items.push(item));
  }

  deleteTodo(item: any): void {
    this.todoService.deleteTodo(item).subscribe(() => {
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];

        if (element.id == item.id) {
          this.items.splice(index, 1);
          break;
        }
      }
    });
  }

  markAsDone(item: any): void {
    item.done = !item.done;
    this.todoService.updateTodo(item).subscribe(() => console.log('updated'));
  }
}
