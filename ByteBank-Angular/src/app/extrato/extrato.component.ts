import { ServicesService } from '../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any;

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencia;
  }
}
