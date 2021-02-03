import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input() element: { name: string, type: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
