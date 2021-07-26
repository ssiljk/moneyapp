import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';
import { CotizacionesService } from '../services/cotizaciones.service';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

prueba : string = 'valor inicial';
 quoteDolar : Quote = {
    salePrice : 0.0 ,
    buyPrice : 0.0 ,
    timeInfo : 'Sin Actualizar'
  };
  quoteReal : Quote = {
    salePrice : 0.0 ,
    buyPrice : 0.0 ,
    timeInfo : 'Sin Actualizar'
  };
 

  constructor(private cotizacionesService: CotizacionesService) { }

  ngOnInit(): void {
   
  }

  getQuote() {
    this.cotizacionesService.getQuote('dolar').subscribe((quote:Quote) => {
      
      this.quoteDolar = quote;
      
    }, error => {
      console.log(error);
    });

    this.cotizacionesService.getQuote('real').subscribe((quote:Quote) => {
      
      this.quoteReal = quote;
      
    }, error => {
      console.log(error);
    });


  }

}
