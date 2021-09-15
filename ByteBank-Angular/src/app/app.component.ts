import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank-Angular';

  //[] passando valor inicial para não da erro.
  transferencias: any[] = [];

  transferir($event: any){
    console.log($event);
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }

  
}
