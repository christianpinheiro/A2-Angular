import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ChristianHomeComponentComponent } from './christian-home-component/christian-home-component.component';
import { ChristianTasksComponentComponent } from './christian-tasks-component/christian-tasks-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ChristianHomeComponentComponent },
      { path: 'tarefas', component: ChristianTasksComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ChristianHomeComponentComponent,
    ChristianTasksComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
