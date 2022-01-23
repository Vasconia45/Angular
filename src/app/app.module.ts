import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiModuloBody } from './moduloBody/mi-moduloBody/mi-moduloBody.component';
import { MiModuloHeader } from './moduloHeader/mi-moduloHeader/mi-moduloHeader.component';
import { MiModuloFooter } from './moduloFooter/mi-moduloFooter/mi-moduloFooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MiModuloHeader,
    MiModuloBody,
    MiModuloFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
