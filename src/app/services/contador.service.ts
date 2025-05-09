import { Injectable } from '@angular/core';
import { EstadoContador } from '../models/estado-contador.enum';

// @Injectable: É um decorador. Decoradores começam com @ e adicionam 
// comportamentos extras a classes.
// { providedIn: 'root' }: Diz ao Angular que esse serviço deve estar 
// disponível em toda a aplicação. Ou seja, qualquer componente 
// pode usar esse serviço sem ter que configurá-lo novamente.
@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private contador: number = 0;


  // FUNÇÕES DO SERVIÇO
  // Essas funções servem para controlar o valor do contador.
  // : void: Diz que essa função não retorna nada.
  // this.contador++: Aumenta o valor do contador em 1.
  incrementar(): void {
    this.contador++;
  }

  // Função que diminui o valor do contador em 1.
  descrementar(): void {
    // Subtrai 1 do valor atual.
    this.contador--;
  }

  // Função que zera o contador.
  resetar(): void {
    // Define o valor como zero.
    this.contador= 0;
  }

  // Função para consultar o valor atual do contador.
  // : number: Diz que essa função vai retornar um número.
  getContador(): number {
    // Retorna o valor atual da variável contador.
    return this.contador
  }


  // : EstadoContador: Retorna um dos valores do enum (Positivo, Neutro ou Negativo).
  getEstadoContador(): EstadoContador {
    // Se o valor for maior que zero, retornamos Positivo.
    if (this.contador > 0) {
      return EstadoContador.Positivo;
      // Se o valor for igual a zero, retornamos Neutro.
    } else if (this.contador === 0) {
      return EstadoContador.Neutro;
      // e não for nenhum dos anteriores (ou seja, menor que zero), retornamos Negativo.
    } else {
      return EstadoContador.Negativo;
    }
  }

}

// Criamos um serviço de contador com funções para incrementar, decrementar, 
// resetar e consultar.
// Também temos uma função para verificar o estado do contador: 
// se está positivo, negativo ou neutro.
// Tudo está organizado em uma classe reutilizável, que pode ser usada em 
// qualquer parte do Angular graças ao @Injectable.