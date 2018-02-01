import {
  Component, Input, ChangeDetectionStrategy, SimpleChanges,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'b-comp',
  template: `
  <div (click)="clickIt()">BComponent Title: {{data.title}}</div>
  <ba-comp [data]="data.baComp"></ba-comp>
  <bb-comp [data]="data.bbComp"></bb-comp>
  `
})
export class BComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() data;

  compName = 'BComponent';

  constructor() {
    console.log('CONSTRUCTOR', this.compName);
   }

  ngOnChanges() {
    console.log('OnChanges', this.compName);
  }

  ngOnInit() {
    console.log('OnInit', this.compName);
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
