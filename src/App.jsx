import { useEffect, useState } from 'react';
import { CatalogoFiltros } from './components/CatalogoFiltros.jsx';
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
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [busca, setBusca] = useState('');
  const [statusCatalogo, setStatusCatalogo] = useState('Carregando metadados do catálogo...');

  useEffect(() => {
    const controller = new AbortController();

    async function carregarMetadados() {
      try {
        const resposta = await fetch('/catalogo-meta.json', {
          signal: controller.signal,
        });

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar os metadados.');
        }

        const dados = await resposta.json();
        setStatusCatalogo(dados.mensagem);
      } catch (erro) {
        if (erro.name !== 'AbortError') {
          setStatusCatalogo('Metadados indisponíveis; o catálogo local continua funcionando.');
        }
      }
    }

    carregarMetadados();

    return () => controller.abort();
  }, []);

  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
  const totalPromocoes = produtos.filter((produto) => produto.promocao).length;

  const categorias = [...new Set(produtos.map((produto) => produto.categoria))].sort();

  const termoBusca = busca.trim().toLocaleLowerCase('pt-BR');
  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeCategoria =
      categoriaSelecionada === 'Todas' || produto.categoria === categoriaSelecionada;
    const correspondeBusca =
      termoBusca === '' || produto.nome.toLocaleLowerCase('pt-BR').includes(termoBusca);

    return correspondeCategoria && correspondeBusca;
  });

  function adicionarProduto(novoProduto) {
    setProdutos((atuais) => [...atuais, novoProduto]);
  }

  function removerProduto(id) {
    setProdutos((atuais) => atuais.filter((produto) => produto.id !== id));
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Atividade Integrada — Unidade 3 · React</p>
        <h1>iTech Service Sales</h1>
        <p className="hero__subtitulo">
          Catálogo acadêmico reutilizável de ativos e integrações de TI no contexto Zabbix +
          ServiceNow.
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
        <div>
          <span>Itens visíveis</span>
          <strong>{produtosFiltrados.length}</strong>
        </div>
      </section>

      <section className="secao status-assincrono" aria-live="polite">
        <p className="eyebrow">useEffect + comunicação assíncrona</p>
        <p>{statusCatalogo}</p>
      </section>

      <section className="secao">
        <div className="secao__cabecalho">
          <div>
            <p className="eyebrow">Listas, keys e filtros</p>
            <h2>Catálogo de produtos</h2>
          </div>
          <p>{produtosFiltrados.length} itens renderizados com map()</p>
        </div>

        <CatalogoFiltros
          categorias={categorias}
          categoriaSelecionada={categoriaSelecionada}
          busca={busca}
          onCategoriaChange={setCategoriaSelecionada}
          onBuscaChange={setBusca}
        />

        {produtosFiltrados.length > 0 ? (
          <div className="catalogo-grid">
            {produtosFiltrados.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                categoria={produto.categoria}
                promocao={produto.promocao}
              >
                <button
                  className="botao-remover"
                  type="button"
                  onClick={() => removerProduto(produto.id)}
                  aria-label={`Remover ${produto.nome}`}
                >
                  Remover
                </button>
              </ProdutoCard>
            ))}
          </div>
        ) : (
          <p className="estado-vazio">Nenhum produto corresponde aos filtros informados.</p>
        )}
      </section>

      <section className="secao conceito-children">
        <p className="eyebrow">Props + children + eventos</p>
        <h2>Componente reutilizável</h2>
        <p>
          O ProdutoCard recebe nome, preço, categoria e promoção por props. O botão Remover é
          enviado como children pelo componente pai; ao ser clicado, dispara um evento que chama
          uma função do App e atualiza o estado da lista.
        </p>
      </section>

      <section className="secao">
        <div className="secao__cabecalho">
          <div>
            <p className="eyebrow">Formulário controlado</p>
            <h2>Adicionar novo produto</h2>
          </div>
          <p>O novo item entra no estado e passa a participar das listas e filtros.</p>
        </div>

        <ProdutoForm onAdicionarProduto={adicionarProduto} />
      </section>
    </main>
  );
}
