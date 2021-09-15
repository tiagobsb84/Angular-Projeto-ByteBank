import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

    //EventEmitter propragar os dados.
    @Output() aoTransferir = new EventEmitter<any>();
    
    valor: number | undefined;
    destino: number | undefined;


    transferir(){
        const valorEmitir = {valor: this.valor, destino: this.destino};
        this.aoTransferir.emit(valorEmitir);

        this.limparCampos();
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
      }
}