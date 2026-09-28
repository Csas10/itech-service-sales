# iTech Service Sales

Projeto acadêmico evolutivo de JavaScript e React contextualizado como uma **Vitrine de Ativos e Integrações de TI**. Os exemplos usam Zabbix e ServiceNow apenas como contexto didático.

> Todos os preços são fictícios. O projeto não representa preços oficiais, não vende licenças e não executa integração operacional com os fabricantes.

## Histórico das entregas

- **Unidade 1:** catálogo em JavaScript ES6+ executado no console.
- **Unidade 2:** evolução para React + Vite, cards, props, JSX, `map`, `reduce`, promoção e formulário com `useState`.
- **Unidade 3:** componentes reutilizáveis, `children`, eventos, listas filtradas, busca, formulário, estado, `useEffect` e comunicação assíncrona.

## Unidade 3 — Atividade Integrada

### Componentes e props

O componente `ProdutoCard` permanece reutilizável e recebe por props:

- `nome`
- `preco`
- `categoria`
- `promocao`

### Children

O `ProdutoCard` também recebe `children`. No `App.jsx`, o botão **Remover** é passado dentro do card:

```jsx
<ProdutoCard nome={produto.nome} preco={produto.preco} categoria={produto.categoria}>
  <button onClick={() => removerProduto(produto.id)}>Remover</button>
</ProdutoCard>
```

Assim, o card define sua estrutura principal, mas o componente pai pode inserir conteúdo adicional reutilizável.

### Estilização

A estilização foi separada entre:

- `src/App.css`: layout geral, formulário, filtros e grid;
- `src/components/ProdutoCard.css`: estilos específicos do card e destaque de promoção.

Os produtos são organizados em grid responsivo, e itens em promoção recebem destaque visual próprio.

### Listas e keys

A lista visível é renderizada com `map()` e usa `produto.id` como `key` única.

Também existem duas formas de gerar listas diferentes:

1. filtro por categoria;
2. busca por nome.

Os filtros podem ser combinados.

### Formulário

O componente `ProdutoForm` continua usando estado controlado e possui os campos obrigatórios da atividade:

- nome;
- preço;
- categoria;
- botão **Adicionar produto**.

Ao enviar, o novo produto é comunicado ao `App` por callback e incluído no estado do catálogo.

### Eventos e estado

A atividade demonstra eventos em:

- `onChange` dos campos;
- `onSubmit` do formulário;
- `onClick` do botão Remover;
- alteração do filtro por categoria;
- alteração da busca por nome.

O estado React controla produtos, formulário, filtro, busca e status de carregamento.

### Efeito colateral e comunicação assíncrona

Para cobrir integralmente o objetivo geral da Unidade 3, o `App.jsx` usa `useEffect` e `fetch` para carregar `/catalogo-meta.json`, servido pelo próprio Vite.

Isso demonstra uma requisição assíncrona sem depender de APIs externas ou credenciais. O catálogo continua funcional mesmo se o carregamento dos metadados falhar.

## Checklist da Unidade 3

| Requisito | Implementação |
| --- | --- |
| Componente reutilizável `ProdutoCard` | ✅ |
| Props `nome`, `preco`, `categoria` | ✅ |
| Propriedades personalizadas | ✅ promoção e demais props |
| Uso de `children` | ✅ botão Remover |
| CSS para componentes | ✅ `App.css` + `ProdutoCard.css` |
| Cards em grid | ✅ |
| Destaque de promoção | ✅ |
| Lista com `map()` | ✅ |
| `key` única | ✅ `produto.id` |
| Lista filtrada por categoria | ✅ |
| Formulário com nome, preço e categoria | ✅ |
| Botão Adicionar produto | ✅ |
| Filtro por categoria (extra) | ✅ |
| Busca por nome (extra) | ✅ |
| Estado e eventos | ✅ |
| `useEffect` | ✅ |
| Comunicação assíncrona | ✅ `fetch('/catalogo-meta.json')` |

## Estrutura relevante

```text
public/
└── catalogo-meta.json

src/
├── components/
│   ├── CatalogoFiltros.jsx
│   ├── ProdutoCard.css
│   ├── ProdutoCard.jsx
│   └── ProdutoForm.jsx
├── data/
│   └── produtos.js
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

Validação da entrega:

```bash
npm run check
```

O mesmo quality gate também preserva a verificação da Unidade 1 e executa o build React/Vite.

Para executar a Unidade 1 no console:

```bash
npm run console
```
