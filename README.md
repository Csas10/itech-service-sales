# iTech Service Sales — Catálogo de Soluções de TI

Protótipo acadêmico em JavaScript ES6+ executado no console com Node.js. O catálogo contextualiza a atividade como uma **Vitrine de Ativos e Integrações de TI**, reunindo exemplos relacionados a **Zabbix** e **ServiceNow**.

> **Escopo didático:** todos os preços são fictícios e utilizados somente para demonstrar os conceitos exigidos na atividade. O projeto não consulta fabricantes, não vende licenças e não realiza integração operacional real.

## Execução

Não há dependências externas. Com Node.js instalado:

```bash
npm run check
npm start
```

- `npm run check`: valida a sintaxe de `Produto.js` e `index.js`.
- `npm start`: executa o catálogo no console.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `Produto.js` | Exporta a classe `Produto`, seu construtor e os métodos `aplicarDesconto()` e `exibirInfo()`. |
| `index.js` | Importa `Produto` e demonstra todos os requisitos do checklist JavaScript. |
| `package.json` | Configura ES Modules com `"type": "module"` e os scripts de execução. |
| `.gitignore` | Exclui dependências, saídas geradas, logs e arquivos de ambiente. |

## Checklist de JavaScript

| Requisito | Implementação |
| --- | --- |
| `var`, `let`, `const` | `categoriaPrincipal`, `descontoPadrao` e `nomeLoja`. |
| Função tradicional | `calcularValorFinal(preco, desconto)`. |
| Arrow function equivalente | `calcularValorFinalArrow(preco, desconto)`. |
| Objeto literal de produto | `produtoLiteral` com `nome`, `preco` e `categoria`. |
| Classe `Produto` | Propriedades `nome`, `preco` e `categoria`. |
| `aplicarDesconto()` | Retorna o preço após aplicação do percentual informado. |
| `exibirInfo()` | Retorna nome e preço formatados. |
| Array com 5 produtos | `catalogoOriginal`. |
| `map` | Gera um array contendo somente os nomes. |
| `filter` | Filtra os produtos da categoria `Monitoramento`. |
| `reduce` | Soma o preço total do catálogo. |
| Destructuring | Extrai `nome` e `preco` de um produto. |
| Template literal | Exibe `${nome} custa R$${preco}` no console. |
| Módulos ES6 | `Produto.js` exporta a classe e `index.js` a importa. |
| Operador ternário | Define `Em promoção` ou `Preço regular`. |
| Spread operator | Cria `catalogoExpandido` com os 5 itens originais + 1 novo item. |

## Resultado validado

A execução desta versão apresenta:

- **5 produtos** no catálogo original;
- `map` com apenas os 5 nomes;
- `filter` retornando os itens de **Monitoramento**;
- total calculado por `reduce` de **R$ 3.450,00**;
- função tradicional e arrow function produzindo o mesmo valor final;
- aplicação de desconto por método da classe;
- status de promoção por operador ternário;
- **6 produtos** no catálogo expandido criado com spread, preservando os 5 originais.

## Contexto acadêmico

O Zabbix representa o contexto de monitoramento e observabilidade, enquanto o ServiceNow representa gestão de serviços e operações de TI. Essa contextualização substitui a loja de varejo tradicional por um catálogo corporativo didático, sem alterar o objetivo central da atividade: demonstrar os fundamentos de JavaScript solicitados no checklist.
