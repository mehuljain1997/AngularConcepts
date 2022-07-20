import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'home-detail',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy {

  @Input() myValue="Initial"
  constructor() { 
    console.log('constructor calling')
  }

  ngOnChanges(changes:SimpleChanges ){
    console.log('ngOnChanges calling',changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit calling',this.myValue)
  }

  ngDoCheck(){
    console.log('ngDoCheck calling')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit calling')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked calling')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit calling')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked calling')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy calling')
  }

  getData(a){
    console.log('getData calling',a)
  }

}
