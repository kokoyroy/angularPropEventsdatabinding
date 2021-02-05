import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  @Input() element: { name: string, type: string, content: string };


  //lifecycle hooks practice
  //for learning puproses

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngoninit called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges called!');
  }
  ngDoCheck() {
    console.log('vazei o docheck ti stoli tou...');
  }
  ngAfterContentInit() {
    console.log('after content init called');

  }
  ngAfterContentChecked() {
    console.log('afterContent checked called');
  }
  ngAfterViewChecked() {
    console.log('after viewchecked called');

  }
  ngAfterViewInit() {
    console.log('after viewinit called');

  }
  ngOnDestroy(){
    
  }

}
