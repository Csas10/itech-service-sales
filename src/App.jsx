import { useEffect, useState } from 'react';
import { CatalogoFiltros } from './components/CatalogoFiltros.jsx';
import { ProdutoCard } from './components/ProdutoCard.jsx';
import { ProdutoForm } from './components/ProdutoForm.jsx';
import { buscarProdutos } from './services/produtosApi.js';
import './App.css';

const STORAGE_KEY = 'itech-produtos-adicionados-v1';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function lerProdutosPersistidos() {
  try {
    const valor = localStorage.getItem(STORAGE_KEY);

    if (!valor) {
      return [];
    }

    const produtos = JSON.parse(valor);
    return Array.isArray(produtos) ? produtos : [];
  } catch {
    return [];
  }
}

function salvarProdutosPersistidos(produtos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
  } catch {
    // O catálogo permanece funcional mesmo se o navegador bloquear o localStorage.
  }
}

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erroCarregamento, setErroCarregamento] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function carregarProdutos() {
      setCarregando(true);
      setErroCarregamento('');

      try {
        const produtosDaApi = await buscarProdutos(controller.signal);
        const produtosPersistidos = lerProdutosPersistidos();

        const produtosUnicos = new Map();

        [...produtosDaApi, ...produtosPersistidos].forEach((produto) => {
          produtosUnicos.set(produto.id, produto);
        });

        setProdutos([...produtosUnicos.values()]);
      } catch (erro) {
        if (erro.name !== 'AbortError') {
          setErroCarregamento(
            'Não foi possível carregar produtos.json. Produtos salvos localmente ainda podem ser exibidos.',
          );
          setProdutos(lerProdutosPersistidos());
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarProdutos();

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
    const produtoDoUsuario = {
      ...novoProduto,
      origem: 'localStorage',
    };

    setProdutos((atuais) => {
      const atualizados = [...atuais, produtoDoUsuario];
      const persistidos = atualizados.filter((produto) => produto.origem === 'localStorage');
      salvarProdutosPersistidos(persistidos);
      return atualizados;
    });
  }

  function removerProduto(id) {
    setProdutos((atuais) => {
      const atualizados = atuais.filter((produto) => produto.id !== id);
      const persistidos = atualizados.filter((produto) => produto.origem === 'localStorage');
      salvarProdutosPersistidos(persistidos);
      return atualizados;
    });
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Atividade Integrada — Unidade 4 · React</p>
        <h1>iTech Service Sales</h1>
        <p className="hero__subtitulo">
          Catálogo acadêmico com eventos, estado, efeitos colaterais e comunicação assíncrona no
          contexto Zabbix + ServiceNow.
        </p>
        <p className="aviso">Todos os valores são fictícios e usados apenas para demonstração.</p>
      </header>

      {carregando ? (
        <section className="estado-carregamento" aria-live="polite" aria-busy="true">
          <div className="carregando-indicador" aria-hidden="true" />
          <div>
            <p className="eyebrow">Fetch + Promise + async/await</p>
            <h2>Carregando...</h2>
            <p>Buscando os produtos iniciais em produtos.json.</p>
          </div>
        </section>
      ) : (
        <>
          {erroCarregamento ? (
            <p className="aviso-erro" role="alert">
              {erroCarregamento}
            </p>
          ) : (
            <p className="status-fonte" aria-live="polite">
              Produtos iniciais carregados de <strong>produtos.json</strong> com fetch + useEffect.
            </p>
          )}

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

          <section className="secao">
            <div className="secao__cabecalho">
              <div>
                <p className="eyebrow">Estado + eventos + listas</p>
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
            <p className="eyebrow">Fluxo assíncrono da Unidade 4</p>
            <h2>Do JSON para o estado React</h2>
            <p>
              Na inicialização, o useEffect chama uma função async. Essa função aguarda o fetch de
              produtos.json, converte a resposta para JSON e atualiza o estado com setProdutos.
              Durante a espera, a interface exibe “Carregando...”. Produtos cadastrados pelo
              usuário são combinados aos dados do JSON e persistidos no localStorage.
            </p>
          </section>

          <section className="secao">
            <div className="secao__cabecalho">
              <div>
                <p className="eyebrow">onSubmit + useState + localStorage</p>
                <h2>Adicionar novo produto</h2>
              </div>
              <p>Produtos adicionados permanecem disponíveis após recarregar a página.</p>
            </div>

            <ProdutoForm onAdicionarProduto={adicionarProduto} />
          </section>
        </>
      )}
    </main>
  );
}
