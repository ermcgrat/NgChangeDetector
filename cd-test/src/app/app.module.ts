import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './app.component';
import { AComponent } from './aBranch/aComponent';
import { BComponent } from './bBranch/bComponent';
import { AAComponent } from './aBranch/aaComponent';
import { ABComponent } from './aBranch/abComponent';
import { BAComponent } from './bBranch/baComponent';
import { BBComponent } from './bBranch/bbComponent';

@NgModule({
  declarations: [
    RootComponent,
    AComponent,
    BComponent,
    AAComponent,
    ABComponent,
    BAComponent,
    BBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
