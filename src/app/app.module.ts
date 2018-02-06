import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CheckService} from './check.service';

import { HttpModule } from '@angular/http';
import {CheckboxModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckboxComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CheckboxModule
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
