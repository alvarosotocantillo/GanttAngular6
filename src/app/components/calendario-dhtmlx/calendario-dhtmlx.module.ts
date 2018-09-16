import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioDhtmlxComponent } from './calendario-dhtmlx/calendario-dhtmlx.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarioDhtmlxComponent],
  exports: [CalendarioDhtmlxComponent]
})
export class CalendarioDhtmlxModule { }
