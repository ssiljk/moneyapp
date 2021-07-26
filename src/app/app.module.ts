import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizacionesComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
