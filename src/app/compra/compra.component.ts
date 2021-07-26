import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Transaction } from '../models/transaction';
import { CompraService } from '../services/compra.service';
import { BuyInfo } from '../models/buyInfo';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  buyInfo : BuyInfo = {
    userId : '',
    quantityToInvest : 0,
    currencyName : ''
  };
  checkoutForm = this.formBuilder.group({
    usuario: '',
    cantidad: '',
    moneda: ''
  });
  
  transaction : Transaction = {
    id : 0,
    userId : 'nouser',
    amount : 0,
    currencyName : 'ninguna',
    transactionDate : 'ninguna'
  };
  
  onSubmit() {
      
    console.log('Your form data : ', this.checkoutForm.value);
    
    this.transactionReset();
    this.buyInfo.userId = this.checkoutForm.get('usuario').value;
    this.buyInfo.quantityToInvest = this.checkoutForm.get('cantidad').value;
    this.buyInfo.currencyName = this.checkoutForm.get('moneda').value;
    console.log('buyInfo : ', this.buyInfo);
    this.buy(this.buyInfo);
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
}

transactionReset(){
  this.transaction.id = 0;
  this.transaction.userId = 'nouser';
  this.transaction.amount=0;
  this.transaction.currencyName = 'ninguna';
  this.transaction.transactionDate = 'ninguna';

}

  constructor(private compraService: CompraService, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  buy(buyInfo : BuyInfo){
    this.compraService.buy(buyInfo).subscribe((transaction:Transaction) => {
      console.log(transaction);
      this.transaction = transaction;
    }, error => {
      console.log(error);
    } );
  }

}
