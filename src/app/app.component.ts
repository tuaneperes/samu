import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
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
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorID(51);
        this.municipios_atendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf)
        this.media = this.calculoDeMedia();
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
