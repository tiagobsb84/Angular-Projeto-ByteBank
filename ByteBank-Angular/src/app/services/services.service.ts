import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
   private listaTransferencia: any [];

   private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencia = []
   }

   get transferencia(){
     return this.listaTransferencia;
   }

   getTodas(): Observable<Transferencia[]>{
      return this.httpCliente.get<Transferencia[]>(this.url);
   }

   adicionar(transferencia: Transferencia): Observable<Transferencia> {
      this.AddData(transferencia);

      return this.httpCliente.post<Transferencia>(this.url, transferencia);
   }

   AddData(transferencia: any){
    transferencia.data = new Date();
   }
}
