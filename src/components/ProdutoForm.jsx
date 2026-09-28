import { useState } from 'react';

const estadoInicial = {
  nome: '',
  preco: '',
  categoria: 'Monitoramento',
  promocao: false,
};

export function ProdutoForm({ onAdicionarProduto }) {
  const [formulario, setFormulario] = useState(estadoInicial);

  function atualizarCampo(evento) {
    const { name, value, type, checked } = evento.target;
    setFormulario((atual) => ({
      ...atual,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const nome = formulario.nome.trim();
    const preco = Number(formulario.preco);

    if (!nome || Number.isNaN(preco) || preco < 0) {
      return;
    }

    onAdicionarProduto({
      id: `produto-${Date.now()}`,
      nome,
      preco,
      categoria: formulario.categoria,
      promocao: formulario.promocao,
    });

    setFormulario(estadoInicial);
  }

  return (
    <form className="produto-form" onSubmit={enviarFormulario}>
      <div className="campo campo--amplo">
        <label htmlFor="nome">Nome do produto</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={formulario.nome}
          onChange={atualizarCampo}
          placeholder="Ex.: Integração Zabbix + ServiceNow"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="preco">Preço fictício (R$)</label>
        <input
          id="preco"
          name="preco"
          type="number"
          min="0"
          step="0.01"
          value={formulario.preco}
          onChange={atualizarCampo}
          placeholder="0,00"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={formulario.categoria}
          onChange={atualizarCampo}
        >
          <option>Monitoramento</option>
          <option>Serviço</option>
          <option>Gestão (ITSM)</option>
          <option>Gestão (ITOM)</option>
          <option>Integração</option>
        </select>
      </div>

      <label className="campo-check">
        <input
          name="promocao"
          type="checkbox"
          checked={formulario.promocao}
          onChange={atualizarCampo}
        />
        Marcar como promoção
      </label>

      <button type="submit">Adicionar ao catálogo</button>
    </form>
  );
}
