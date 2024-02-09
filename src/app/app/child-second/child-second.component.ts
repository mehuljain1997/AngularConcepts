import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.css']
})
export class ChildSecondComponent implements OnInit {

  @Input() childToChild = ''

  constructor() { }

  ngOnInit(): void {
    console.log('childToChild',this.childToChild)
  }

}
