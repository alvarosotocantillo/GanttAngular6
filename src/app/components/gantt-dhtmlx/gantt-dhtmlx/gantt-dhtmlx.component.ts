import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

declare var demo_tasks:any;

declare var gantt:any;


@Component({
  selector: 'gantt-dhtmlx',
  templateUrl: './gantt-dhtmlx.component.html'
})
export class GanttDhtmlxComponent implements OnInit {

  @Input() public id = 'mygantt';

  @Input() public data:any = [];

  @Input() public options:any = {};



  constructor() { }

  ngOnInit() {
  }

  init() {  
    $('#'+this.id).dhx_gantt(this.options);
    if(this.data.length)
    {
      this.render();
    }
  }

  render()
  {
    $('#'+this.id).dhx_gantt().parse(this.data);
  }

}
