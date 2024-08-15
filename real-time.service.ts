import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class RealTimeService {
  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://your-server-url/real-time')
      .build();

    this.hubConnection.start().catch((err) => console.error(err));
  }

  sendUpdate(update: any) {
    this.hubConnection.invoke('SendUpdate', update);
  }

  receiveUpdate(callback: (update: any) => void) {
    this.hubConnection.on('ReceiveUpdate', callback);
  }
}
