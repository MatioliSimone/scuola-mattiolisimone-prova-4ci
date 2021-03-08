import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MattiolisComponent } from './mattiolis/mattiolis.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MattiolisComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
