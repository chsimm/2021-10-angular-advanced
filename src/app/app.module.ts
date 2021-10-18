import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full',
      },
      {
        path: 'todo',
        loadChildren: () =>
          import('./todo/todo.module').then((m) => m.TodoModule),
      },
    ]),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
