import { PensamentoService } from 'src/app/services/pensamento.service';

import { Component, Inject, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listarPensamentos :Pensamento[]= [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listarPensamentos)=>{
      this.listarPensamentos = listarPensamentos
    })
  }

}
