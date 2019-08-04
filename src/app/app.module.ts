import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHiddnDirective } from './directives/hidden.directive';
import { MyUpperCase } from './pipes/myuppercase.pipe';

@NgModule({
  declarations: [
    AppComponent, MyHiddnDirective, MyUpperCase
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
