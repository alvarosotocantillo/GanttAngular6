import {DataService} from "./data.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {GanttComponent} from "./gantt.component";
import {DayPilotModule} from "daypilot-pro-angular";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule
  ],
  declarations: [
    GanttComponent
  ],
  exports:      [ GanttComponent ],
  providers:    [ DataService ]
})
export class GanttModule { }
