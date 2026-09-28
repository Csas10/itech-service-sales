# iTech Service Sales

Projeto acadêmico evolutivo de JavaScript e React contextualizado como uma **Vitrine de Ativos e Integrações de TI** com exemplos de Zabbix e ServiceNow.

> Todos os preços são fictícios. O projeto não representa preços oficiais, não vende licenças e não executa integração operacional com fabricantes.

## Histórico

- **Unidade 1:** JavaScript ES6+ no console.
- **Unidade 2:** React + Vite, JSX, props, cards, listas, total e formulário.
- **Unidade 3:** componentes reutilizáveis, `children`, eventos, filtros, busca, estado e primeira demonstração assíncrona.
- **Unidade 4:** produtos carregados via `fetch` de `produtos.json`, `useEffect`, `async/await`, estado de carregamento e persistência em `localStorage`.

## Unidade 4 — Eventos, estado e comunicação assíncrona

### 1. Eventos

Cada card possui um botão **Remover** com `onClick`:

```jsx
<button onClick={() => removerProduto(produto.id)}>Remover</button>
```

O formulário usa `onSubmit` para cadastrar produtos. Os campos continuam controlados por `onChange`.

### 2. Estado com useState

O catálogo começa com um array vazio:

```jsx
const [produtos, setProdutos] = useState([]);
```

Após o carregamento do JSON, `setProdutos` recebe os produtos iniciais. Novos produtos são adicionados ao estado e o botão Remover retira o item correspondente.

Também existem estados para:

- carregamento;
- erro de carregamento;
- filtro por categoria;
- busca por nome.

### 3. Simulação de API externa

Os dados iniciais estão em:

```text
public/produtos.json
```

A função de comunicação fica isolada em:

```text
src/services/produtosApi.js
```

`fetch()` retorna uma **Promise**. A implementação final consome essa Promise usando `async/await`:

```js
export async function buscarProdutos(signal) {
  const resposta = await fetch('/produtos.json', { signal });
  const dados = await resposta.json();
  return dados;
}
```

### 4. useEffect e async/await

Na inicialização do componente, um `useEffect` chama uma função assíncrona:

```jsx
useEffect(() => {
  async function carregarProdutos() {
    const produtosDaApi = await buscarProdutos();
    setProdutos(produtosDaApi);
  }

  carregarProdutos();
}, []);
```

A implementação real também usa `AbortController`, tratamento de erro e reconciliação com os itens salvos no navegador.

Enquanto a Promise ainda não terminou, a interface exibe:

```text
Carregando...
Buscando os produtos iniciais em produtos.json.
```

### 5. Desafio extra — localStorage

Produtos cadastrados pelo formulário são salvos sob a chave:

```text
itech-produtos-adicionados-v1
```

Ao recarregar a página:

1. `produtos.json` é carregado novamente via `fetch`;
2. os produtos cadastrados pelo usuário são lidos do `localStorage`;
3. as duas fontes são combinadas por `id`.

Se um produto criado pelo usuário for removido, ele também é retirado da persistência.

## Checklist da Unidade 4

| Requisito | Implementação |
| --- | --- |
| `onClick` para remover | ✅ |
| `onSubmit` no formulário | ✅ |
| `useState` na lista | ✅ |
| Adicionar produto ao estado | ✅ |
| Remover produto do estado | ✅ |
| `produtos.json` simulando API | ✅ |
| `fetch` dos produtos iniciais | ✅ |
| Promise no carregamento | ✅ `fetch()` |
| `useEffect` na inicialização | ✅ |
| `async/await` | ✅ `buscarProdutos` e `carregarProdutos` |
| Mensagem “Carregando...” | ✅ |
| Persistência em `localStorage` (extra) | ✅ |

## Estrutura relevante

```text
public/
├── catalogo-meta.json
└── produtos.json

src/
├── components/
│   ├── CatalogoFiltros.jsx
│   ├── ProdutoCard.css
│   ├── ProdutoCard.jsx
│   └── ProdutoForm.jsx
├── services/
│   └── produtosApi.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Execução

Requer Node.js 22.12+.

```bash
npm install
npm run dev
```

Validação:

```bash
npm run check
```

A Unidade 1 continua disponível com:

```bash
npm run console
```
