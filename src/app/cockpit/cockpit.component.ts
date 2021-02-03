import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, content: string }>();
  @Output() blueprindCreated = new EventEmitter<{ blueprintName: string, content: string }>();



  constructor() { }

  ngOnInit(): void {
  }






  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, content: this.newServerContent })
  }

  onAddBlueprint() {
    this.blueprindCreated.emit({ blueprintName: this.newServerName, content: this.newServerContent })
  }
}
