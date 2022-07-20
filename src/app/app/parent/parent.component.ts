import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentToChild = 'hello child'
  childToParent = ''
  childToChild=""

  constructor() { }

  ngOnInit(): void {
  }

  callChildToParent(data){
    console.log('child to parent data',data)
    this.childToParent=data
  }

  forParentToChild(data){
    this.childToChild=data
  }

}
