import { useState } from 'react';
import { ProdutoCard } from './components/ProdutoCard.jsx';
import { ProdutoForm } from './components/ProdutoForm.jsx';
import { produtosIniciais } from './data/produtos.js';
import './App.css';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

export default function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);

  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
  const totalPromocoes = produtos.filter((produto) => produto.promocao).length;

  function adicionarProduto(novoProduto) {
    setProdutos((atuais) => [...atuais, novoProduto]);
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Atividade — Unidade 2 · React</p>
        <h1>iTech Service Sales</h1>
        <p className="hero__subtitulo">
          Vitrine acadêmica de ativos e integrações de TI no contexto Zabbix + ServiceNow.
        </p>
        <p className="aviso">Todos os valores são fictícios e usados apenas para demonstração.</p>
      </header>

      <section className="painel-resumo" aria-label="Resumo do catálogo">
        <div>
          <span>Produtos</span>
          <strong>{produtos.length}</strong>
        </div>
        <div>
          <span>Em promoção</span>
          <strong>{totalPromocoes}</strong>
        </div>
        <div>
          <span>Preço total</span>
          <strong>{formatarMoeda(precoTotal)}</strong>
        </div>
      </section>

      <section className="secao">
        <div className="secao__cabecalho">
          <div>
            <p className="eyebrow">Renderização com JSX</p>
            <h2>Catálogo de produtos</h2>
          </div>
          <p>{produtos.length} itens renderizados com map()</p>
        </div>

        <div className="catalogo-grid">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              categoria={produto.categoria}
              promocao={produto.promocao}
            />
          ))}
        </div>
      </section>

      <section className="secao comparacao">
        <p className="eyebrow">Evolução do front-end</p>
        <h2>Console × React</h2>
        <p>
          No JavaScript da Unidade 1, os dados eram manipulados e observados principalmente pelo
          console. Em React, os mesmos dados passam a compor uma interface visual por meio de
          componentes e JSX. Quando o estado muda, o React atualiza a tela de forma declarativa,
          sem a necessidade de manipular manualmente cada elemento do DOM.
        </p>
      </section>

      <section className="secao">
        <div className="secao__cabecalho">
          <div>
            <p className="eyebrow">Desafio extra · useState</p>
            <h2>Cadastrar novo produto</h2>
          </div>
          <p>O novo item é incluído imediatamente na lista acima.</p>
        </div>

        <ProdutoForm onAdicionarProduto={adicionarProduto} />
      </section>
    </main>
  );
}
