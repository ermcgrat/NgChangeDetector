import { Component, Input, ChangeDetectionStrategy, SimpleChanges,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'ba-comp',
  template: `
  <div (click)="clickIt()">BAComponent Title: {{data.title}}</div>
  `
})
export class BAComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() data;

  compName = 'BAComponent';

  constructor() {
    console.log('CONSTRUCTOR', this.compName);
   }

  ngOnChanges() {
    console.log('OnChanges', this.compName);
  }

  ngOnInit() {
    console.log('OnInit', this.compName);
    // setTimeout(() => {
    //   console.log('update from', this.compName);
    //   this.data.title = 'BA Comp!!!';
    // }, 2000);
  }

  ngDoCheck() {
    console.log('DoCheck', this.compName);
  }

  ngAfterContentInit() {
    console.log('AfterContentInit', this.compName);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked', this.compName);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit', this.compName);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked', this.compName);
  }

  clickIt() {
    console.log('click from', this.compName);
  }
}
