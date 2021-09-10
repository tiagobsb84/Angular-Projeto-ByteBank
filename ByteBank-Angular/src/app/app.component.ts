import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank-Angular';

  transferir: any;

  transferencia($event: number){
    this.transferir = $event;
  }

  
}
