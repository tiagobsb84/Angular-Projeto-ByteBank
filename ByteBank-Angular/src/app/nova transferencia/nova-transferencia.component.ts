import { Transferencia } from './../model/transferencia.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

    //EventEmitter propragar os dados.
    @Output() aoTransferir = new EventEmitter<any>();
  
    valor: number = 0;
    destino: number = 0;

    constructor(private service: ServicesService){}

    transferir(){
        const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
        
        this.service.adicionar(valorEmitir).subscribe( 
            (resultado) => {
            console.log(resultado);
            this.limparCampos();
        }, 
        (error) => console.error(error)
        )
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
      }
}