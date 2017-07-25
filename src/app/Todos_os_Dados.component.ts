import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {TodasUFsService} from './services/todasasufs'
import {DadoNome} from './types/todasasufs'

@Component({
  selector: 'app-root',
  templateUrl: './Todos_os_Dados.component.html',
  styleUrls: ['./app.component.css']
})
export class Todos_os_DadosComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    uf: UF;
    municipios_atendidos: Dados[] = [];
    media : number;
    tudo: DadoNome[] = [];

    constructor(private ufService: UFService, private samuService: SamuService, private TodasUFsService: TodasUFsService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.tudo = this.TodasUFsService.mesclardados();
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
