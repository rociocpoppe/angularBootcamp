import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddingNewTaskComponent } from './components/adding-new-task/adding-new-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { IndividualTaskComponent } from './components/individual-task/individual-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddingNewTaskComponent,
    CompletedTaskComponent,
    IndividualTaskComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
