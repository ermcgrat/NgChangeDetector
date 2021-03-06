import {
  Component, Input, ChangeDetectionStrategy, SimpleChanges, NgZone, ChangeDetectorRef,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'ab-comp',
  template: `
  <div (click)="clickIt()">ABComponent Title: {{data.title}}</div>
  `
})
export class ABComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() data;

  compName = 'ABComponent';

  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {
    console.log('CONSTRUCTOR', this.compName);
  }

  ngOnChanges() {
    console.log('OnChanges', this.compName);
  }

  ngOnInit() {
    console.log('OnInit', this.compName);

    // Because we run this outside of angular, it won't cause any change detection to occur
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('update from', this.compName);
        this.data.title = 'AB Comp!?!';

        // we could leverage detectChanges to update the template, again, still without a change detection cycle ever running.
        // markForCheck would do nothing, since no CD happens.
        this.cd.detectChanges();
      }, 3000);
    });
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
