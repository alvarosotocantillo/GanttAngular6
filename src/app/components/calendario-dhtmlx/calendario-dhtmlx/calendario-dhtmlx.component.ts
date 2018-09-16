import { Component, OnInit, Input } from '@angular/core';

declare var $:any;
declare var scheduler:any;

@Component({
  selector: 'calendario-dhtmlx',
  templateUrl: './calendario-dhtmlx.component.html',
  styleUrls: ['./calendario-dhtmlx.component.css']
})
export class CalendarioDhtmlxComponent implements OnInit {

 
  @Input() public id = 'calendario';

  @Input() public data:any = [];

  @Input() public options:any = {};



  constructor() { }

  ngOnInit() {
      this.init();
  }

  init() {  
    $('#'+this.id).dhx_scheduler({
      xml_date:"%Y-%m-%d %H:%i",
      date:new Date(2009,4,25),
      mode:"month"
    });
  }

  render()
  {
    scheduler.load(this.data);
  }
}
