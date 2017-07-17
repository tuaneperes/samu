import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './Resumo.component.html',
  styleUrls: ['./app.component.css']
})
export class ResumoComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    uf: UF;
    municipios_atendidos: Dados[] = [];
    media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getPorID(51);
        this.media = this.calculoDeMedia();
    }

    calculoDeMedia() : number{
      var qtd = 0;
      var total = 0;
      for (let mun of this.municipios_atendidos){
        if (mun.uf_id == 51){
          qtd ++
          total += mun.valor;
        }
      }
      return Math.round (total/qtd);
    }

}
