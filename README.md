<div align="center">
  <h1>🔢 Contador - Angular</h1>
  <p>Um simples contador com botões de incremento, decremento e reset</p>
</div>

---

## 📌 Descrição

Este projeto consiste em um componente Angular chamado `ContadorComponent`, que implementa um contador interativo com funcionalidades básicas de:

- Incrementar valor
- Decrementar valor
- Resetar para zero

O valor atual do contador é exibido dinamicamente na tela e pode ser manipulado com apenas um clique.

---

## ⚙️ Funcionalidades

- ➕ **Incrementar**: Aumenta o valor do contador em 1.
- ➖ **Decrementar**: Diminui o valor do contador em 1 (não fica negativo, se desejado).
- 🔄 **Resetar**: Zera o contador.
- 🧩 **Componente independente**: Pode ser reutilizado em qualquer outro projeto Angular.
- 🎨 **Visual personalizável** com SCSS.

---

## 🧱 Estrutura do Componente

### `contador.component.ts`

Contém a lógica principal do contador, incluindo:
- Valor atual
- Métodos de incremento, decremento e reset

### `contador.component.html`

Define a interface do usuário:
- Mostra o número atual
- Botões para controlar o valor

### `contador.component.scss`

Estiliza o componente com:
- Layout centralizado
- Cores personalizadas
- Botões responsivos

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/JessicaPortilio/Projeto-Contador-Angular-19.git
# Acesse o projeto
cd contador-angular

# Instale as dependências
npm install

# Inicie a aplicação
ng serve
```
