import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TextAst } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullPageCalender';

  calendarPlugins = [dayGridPlugin]; // important!

  calendarEvents = [
    { title: 'event 1', date: '2020-06-01' }
TextAst];

  
    handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }
}
