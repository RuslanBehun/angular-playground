import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolClassComponent } from '../components/component-interaction/school-class/school-class.component';
import { PupilsComponent } from '../components/component-interaction/school-class/pupils/pupils.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolClassComponent,
    PupilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
