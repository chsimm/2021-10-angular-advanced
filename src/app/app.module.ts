import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoItemComponent } from './presentational/todo-item/todo-item.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
