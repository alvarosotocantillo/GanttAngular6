import { Component, OnInit, ViewChild } from '@angular/core';
import { task } from './data';
import { GanttDhtmlxComponent } from '../../components/gantt-dhtmlx/gantt-dhtmlx/gantt-dhtmlx.component';


@Component({
  selector: 'app-gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css']
})
export class GantComponent implements OnInit {

  @ViewChild('gantt') public gantt : GanttDhtmlxComponent;

  public data:any;

  constructor() {

   }

  ngOnInit() {
    this.gantt.data = task;
    this.gantt.init();
  }

}
