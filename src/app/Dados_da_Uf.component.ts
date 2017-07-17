import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './Dados_da_UF.component.html',
  styleUrls: ['./app.component.css']
})
export class Dados_da_UFComponent implements OnInit {
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
    }

    defineUF(): void {
      for(let uf of this.ufs){
        if (uf.id == 51) this.uf = uf;
      }
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
