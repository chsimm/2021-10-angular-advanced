import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from './services/component-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly componentCommunicationService: ComponentCommunicationService
  ) {
    this.componentCommunicationService.deleteTodo$.subscribe((item) => {
      this.deleteTodo(item);
    });
  }

  ngOnInit(): void {
    this.http
      .get<any[]>('https://sampletodobackend.azurewebsites.net/api/v1/todos/')
      .subscribe((items: any[]) => {
        this.items = items;
      });
  }

  addTodo(value: any): void {
    this.http
      .post('https://sampletodobackend.azurewebsites.net/api/v1/todos/', value)
      .subscribe((item) => this.items.push(item));
  }

  deleteTodo(item: any): void {
    this.http
      .delete(
        'https://sampletodobackend.azurewebsites.net/api/v1/todos/' + item.id
      )
      .subscribe(() => {
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
    this.http
      .put(
        'https://sampletodobackend.azurewebsites.net/api/v1/todos/' + item.id,
        item
      )
      .subscribe(() => console.log('updated'));
  }
}
