import {
  Component, Input, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'ba-comp',
  template: `
  <div (click)="clickIt()">BAComponent Title: {{data.title}}</div>
  `
})
export class BAComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() data;

  compName = 'BAComponent';

  constructor(private cd: ChangeDetectorRef) {
    console.log('CONSTRUCTOR', this.compName);
  }

  ngOnChanges() {
    console.log('OnChanges', this.compName);
  }

  ngOnInit() {
    console.log('OnInit', this.compName);

    // This component will no longer be checked by the change detector. It's template will not be updated, not even initially.
    // The title will remain blank in the view. However, all of its lifecycle hooks will be called for each CD cycle,
    // even those originating from this component. Title will still never be updated in template though.
    this.cd.detach();

    // setTimeout will cause a CD cycle to run, this component won't be updated.
    setTimeout(() => {
      console.log('update from', this.compName);
      this.data.title = 'BA Comp :)';

      // unless we were to reattach it. Now the comp will show the (updated) title.
      this.cd.reattach();
    }, 1000);
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
