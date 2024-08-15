import { Component, OnInit } from '@angular/core';
import { RealTimeService } from './real-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  content = '';

  constructor(private realTimeService: RealTimeService) {}

  ngOnInit() {
    this.realTimeService.receiveUpdate((update) => {
      this.content = update.content;
    });
  }

  onContentChange() {
    this.realTimeService.sendUpdate({ content: this.content });
  }
}
