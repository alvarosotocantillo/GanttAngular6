import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLayoutsComponent } from './modulos/shared/app-layouts/app-layouts.component';
import { HeaderComponent } from './modulos/shared/layout/header/header.component';
import { NavigationComponent } from './modulos/shared/layout/navigation/navigation.component';
import { HomeComponent } from './modulos/home/home.component';
import { routing } from './app.routing';
import { GantComponent } from './modulos/gant/gant.component';
import * as Sample from 'angular4-gantt';
import { GanttModule } from './components/gantt/gantt.module';
import { TableComponent } from './components/table/table.component';
import { GanttDhtmlxModule } from './components/gantt-dhtmlx/gantt-dhtmlx.module';
import { CalendarioDhtmlxModule } from './components/calendario-dhtmlx/calendario-dhtmlx.module';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutsComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    GantComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    GanttModule,
    GanttDhtmlxModule,
    CalendarioDhtmlxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
