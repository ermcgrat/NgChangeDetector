import {
  Component, Input, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/take';


@Component({
  selector: 'aa-comp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div (click)="clickIt()">AAComponent Title: {{data.title}}</div>
  `
})
export class AAComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() data;

  compName = 'AAComponent';

  constructor(private cd: ChangeDetectorRef) {
    console.log('CONSTRUCTOR', this.compName);
  }

  ngOnChanges() {
    console.log('OnChanges', this.compName);
  }

  ngOnInit() {
    console.log('OnInit', this.compName);

    // Note that if AComponent is set to OnPush, this setTimeout will fire CD, but this component won't be checked (title won't be updated).
    // This is because it will only check this component if the inputs of AComponent were to change, or if the event triggering CD
    // was fired from WITHIN this components template (use of async pipe in template also works, as it fires an event).
    setTimeout(() => {
      console.log('update from', this.compName);
      this.data.title = 'AA Comp!!!';

      // we can use markForCheck to tell it to check down to this component though
      // this.cd.markForCheck();

      // detectChanges() seems to check this component (and its children) directly, without it itself firing a change detection cycle.
      // Note that this will not cause the lifecycle hooks on this comp or its children to be fired. Template will update though.
      this.cd.detectChanges();
    }, 2000);

    // Same story here. A CD cycle will run, starting at root. But it won't know this is the originating component, since we are doing it
    // outside of the template. To fix this, we would either subscribe to this Observable in the template (via async pipe),
    // or utilize the cd ref to markForCheck, etc
    // const numbers = interval(1000).take(4);
    // numbers.subscribe(x => console.log(x));
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
