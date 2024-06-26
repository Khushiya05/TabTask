import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './component/tabs/tabs.component';


import { RefacortabComponent } from './component/refacortab/refacortab.component';
import { CommonModule } from '@angular/common';
import { SwitchtaskComponent } from './component/switchtask/switchtask.component';
import { TableviewchildComponent } from './component/tableviewchild/tableviewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    RefacortabComponent,
    SwitchtaskComponent,
    TableviewchildComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
