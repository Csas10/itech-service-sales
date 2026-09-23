/** Representa um item demonstrativo da vitrine de soluções de TI. */
export class Produto {
  constructor({ codigo, nome, fabricante, categoria, preco, descricao }) {
    if (!codigo || !nome || !fabricante || !categoria || !descricao) {
      throw new TypeError('Todos os campos textuais do produto são obrigatórios.');
    }

    if (typeof preco !== 'number' || !Number.isFinite(preco) || preco < 0) {
      throw new RangeError('O preço deve ser um número finito e não negativo.');
    }

    this.codigo = codigo;
    this.nome = nome;
    this.fabricante = fabricante;
    this.categoria = categoria;
    this.preco = preco;
    this.descricao = descricao;
  }

  apresentar() {
    const { codigo, nome, fabricante, categoria, descricao } = this;
    return `${codigo} | ${nome} (${fabricante}) | ${categoria} — ${descricao}`;
  }
}
