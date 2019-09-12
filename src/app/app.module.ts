import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolClassComponent } from '../components/component-interaction/school-class/school-class.component';
import { PupilComponent } from '../components/component-interaction/pupil/pupil.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolClassComponent,
    PupilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
