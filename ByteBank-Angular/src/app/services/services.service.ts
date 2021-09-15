import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
   private listaTransferencia: any [];

  constructor() {
    this.listaTransferencia = []
   }

   get transferencia(){
     return this.listaTransferencia;
   }

   adicionar(transferencia: any){
      this.AddData(transferencia);
      this.listaTransferencia.push(transferencia);
   }

   AddData(transferencia: any){
    transferencia.data = new Date();
   }
}
