import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2 (click)="clickIt()">Root Comp Title: {{appState.rootComp.title}}</h2>
  <a-comp [data]="appState.aComp"></a-comp>
  <b-comp [data]="appState.bComp"></b-comp>
  `
})
export class RootComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  compName = 'RootComponent';
  appState = {
    rootComp: {
      title: 'Root Comp'
    },
    aComp: {
      title: 'A Comp',
      aaComp: {
        title: 'AA Comp'
      },
      abComp: {
        title: 'AB Comp'
      }
    },
    bComp: {
      title: 'B Comp',
      baComp: {
        title: 'BA Comp'
      },
      bbComp: {
        title: 'BB Comp'
      }
    }
  };

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
