import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/home/home.component';
import { GantComponent } from './modulos/gant/gant.component';
import { TableComponent } from './components/table/table.component';
import { GanttDhtmlxComponent } from './components/gantt-dhtmlx/gantt-dhtmlx/gantt-dhtmlx.component';


export const routes: Routes = [
    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: {pageTitle: 'Home'},
        component: HomeComponent,
    },    
    {
        path: 'gantt',
        data: {pageTitle: 'Gantt'},
        component: GantComponent,
    },
    {
        path: 'table',
        data: {pageTitle: 'Tabla'},
        component: TableComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});