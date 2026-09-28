/**
 * Representa um produto da vitrine acadêmica de soluções de TI.
 * Os valores utilizados no projeto são fictícios e apenas demonstrativos.
 */
export class Produto {
  constructor(nome, preco, categoria) {
    if (!nome || !categoria) {
      throw new TypeError('Nome e categoria são obrigatórios.');
    }

    if (typeof preco !== 'number' || !Number.isFinite(preco) || preco < 0) {
      throw new RangeError('O preço deve ser um número finito e não negativo.');
    }

    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  aplicarDesconto(percentualDesconto = 0.1) {
    return this.preco * (1 - percentualDesconto);
  }

  exibirInfo() {
    const { nome, preco } = this;
    return `${nome} - Preço Base: R$ ${preco.toFixed(2)}`;
  }
}
