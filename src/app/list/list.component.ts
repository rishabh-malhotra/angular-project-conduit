import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  constructor() { }
  
  @Input() articleCount;
  @Output()
  listNumberclick = new EventEmitter();
  ngOnInit() { 
  }
  listValue(e) {
    this.listNumberclick.emit(e);
  }
}