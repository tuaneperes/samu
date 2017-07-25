import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {ResumoComponent} from './Resumo.component';
import {Todos_os_DadosComponent} from './Todos_os_Dados.component';
import {Dados_da_UFComponent} from './Dados_da_Uf.component';

import { RouterModule }   from '@angular/router';

import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'

import {TodasUFsService} from './services/todasasufs'

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    Todos_os_DadosComponent,
    Dados_da_UFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosdauf',
    component: Dados_da_UFComponent
  },
  {
    path: 'todososdados',
    component: Todos_os_DadosComponent
  }
    ])
  ],
  providers: [SamuService, UFService, TodasUFsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
