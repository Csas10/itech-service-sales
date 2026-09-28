# iTech Service Sales — Catálogo Zabbix + ServiceNow

Projeto acadêmico evolutivo de JavaScript e React. A **Unidade 1** implementou o catálogo no console com JavaScript ES6+. A **Unidade 2** transforma os mesmos conceitos em uma interface React criada com Vite.

> Todos os preços são fictícios e existem apenas para fins didáticos. O projeto não vende licenças, não consulta fabricantes e não representa preços oficiais de Zabbix ou ServiceNow.

## Unidade 2 — React

### 1. Evolução do front-end: console × React

Na Unidade 1, os dados eram manipulados em JavaScript e observados por meio do console. Em React, esses mesmos dados passam a ser representados visualmente com **componentes**, **props** e **JSX**. Em vez de atualizar manualmente elementos da página, descrevemos a interface a partir do estado da aplicação; quando o estado muda, o React renderiza novamente as partes necessárias da tela.

### 2. Estrutura

```text
src/
├── components/
│   ├── ProdutoCard.jsx
│   └── ProdutoForm.jsx
├── data/
│   └── produtos.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

- `src/data/produtos.js`: array inicial com 5 produtos.
- `src/components/ProdutoCard.jsx`: recebe `nome`, `preco`, `categoria` e `promocao` por props e renderiza o card.
- `src/App.jsx`: importa os dados, usa `map()` dentro do JSX, calcula o total com `reduce()` e destaca promoções com renderização condicional.
- `src/components/ProdutoForm.jsx`: desafio extra com `useState` para cadastrar novos produtos.

### 3. Checklist da atividade

| Requisito | Implementação |
| --- | --- |
| Projeto React | React + Vite |
| `src/components/` | `ProdutoCard.jsx` e `ProdutoForm.jsx` |
| `src/data/` | `produtos.js` |
| Importar array no `App.jsx` | `produtosIniciais` |
| Props `nome`, `preco`, `categoria` | `ProdutoCard` |
| JSX em cards | `ProdutoCard.jsx` |
| `map()` dentro do JSX | Lista de `ProdutoCard` no `App.jsx` |
| `reduce()` | Calcula `precoTotal` |
| Condicional/ternário | Destaque visual para `promocao` |
| Formulário opcional | `ProdutoForm.jsx` |
| `useState` | Estado do catálogo e do formulário |
| Novos produtos renderizados | `setProdutos((atuais) => [...atuais, novoProduto])` |
| Comparação console × React | README e seção visível na aplicação |

### 4. Execução

Requisito de ambiente: Node.js **22.12+** para a versão de Vite usada nesta entrega.

```bash
npm install
npm run dev
```

O Vite exibirá a URL local do servidor de desenvolvimento, normalmente `http://localhost:5173`.

### 5. Validação

```bash
npm run check
```

O comando preserva a verificação da Unidade 1 e executa também o build da aplicação React.

Para executar novamente a versão em console da Unidade 1:

```bash
npm run console
```

## Resultado esperado da Unidade 2

A página exibe cinco cards iniciais, o total fictício de **R$ 3.450,00**, destaque para produtos em promoção e uma seção explicando a evolução do console para React. O desafio extra permite cadastrar produtos e atualiza imediatamente os cards, a quantidade de itens, o total e a quantidade de promoções.
