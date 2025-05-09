import { EstadoContador } from './../../models/estado-contador.enum';
import { ContadorService } from './../../services/contador.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contador',
  imports: [CommonModule, FormsModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  // constructor(...): Função que roda quando o componente é criado.
  // public contadorService: Torna o serviço acessível no HTML 
  // usando contadorService.getContador().
  // contadorService: Serviço onde estão as funções que controlam o contador.
  constructor(public contadorService: ContadorService) {}

  // Essa linha é importante para que o HTML possa enxergar o enum EstadoContador.
  // Sem isso, o HTML não reconheceria EstadoContador.Positivo, por exemplo.
  public EstadoContador =  EstadoContador;

  // Funções de controle (chamadas ao clicar nos botões)
  // Essas funções estão aqui só para ligar os botões do HTML com o serviço.
  incrementar(): void {
    // Chama a função incrementar() do serviço.
    this.contadorService.incrementar();
  }

  descrementar(): void {
    this.contadorService.descrementar();
  }

  resetar(): void {
    this.contadorService.resetar();
  }

  // Função que retorna o estado atual
  getEstadoContador(): EstadoContador {
    // Retorna o estado atual do contador (Positivo, Neutro, Negativo) 
    // para o HTML poder usar no ngSwitch.
    return this.contadorService.getEstadoContador();
  }

}
