import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdCigarroDia: number = 0;
  qtdAnosFumando: number = 0;
  tempoVidaPeridido: number = 0;
  barra: number = 0;

  constructor() {}

  calcularTempoVidaPerdido(){
    this.barra = 0;
    const diasPorAno = 360;
    const minutosPerdidoPorCigarro = 10;
    const minutosPorDia = 24 * 60;

    let qtdDiasFumando = this.qtdAnosFumando * diasPorAno;
    let totalCigarrosFumado = qtdDiasFumando * this.qtdCigarroDia;
    this.tempoVidaPeridido = totalCigarrosFumado * minutosPerdidoPorCigarro;
    this.tempoVidaPeridido = this.tempoVidaPeridido / minutosPorDia;


    if (this.tempoVidaPeridido == 0)
    this.barra = 0;
    else if (this.tempoVidaPeridido <30)
    this.barra = 25;
    else if(this.tempoVidaPeridido <60)
    this.barra = 50;    
    else if(this.tempoVidaPeridido <120)
    this.barra = 75;    
    else
    this.barra = 100;
  }
}

