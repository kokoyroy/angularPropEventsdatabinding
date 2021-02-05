import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  @Output('sCreated') serverCreated = new EventEmitter<{ serverName: string, content: string }>();
  @Output() blueprindCreated = new EventEmitter<{ blueprintName: string, content: string }>();
  @ViewChild('serverContent') serverContent: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }






  onAddServer(element: HTMLInputElement) {
    // console.log(this.serverContent.nativeElement.value);

    this.serverCreated.emit({ serverName: element.value, content: this.serverContent.nativeElement.value })
  }

  onAddBlueprint(element: HTMLInputElement) {
    this.blueprindCreated.emit({ blueprintName: element.value, content: this.serverContent.nativeElement.value })
  }
}
