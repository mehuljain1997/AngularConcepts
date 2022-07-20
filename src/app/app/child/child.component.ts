import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentToChild = ''
  @Output() childToParent = new EventEmitter()
  @Output() childToChild = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('parentToChild',this.parentToChild)
  }

  setValue(val){
    console.log('setValue',val)
    this.childToParent.emit(val)
    this.childToChild.emit(val)
  }


}
