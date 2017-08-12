import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { FormtestComponent } from './components/formtest/formtest.component';


@NgModule({
  declarations: [
    FormtestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormtestComponent]
})
export class AppModule { }
