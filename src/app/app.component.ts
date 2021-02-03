import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];


  onServerCreated(event: { serverName: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.content
    })
  }
  onblueprintCreated(event: { blueprintName: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.blueprintName,
      content: event.content
    })
  }


}
