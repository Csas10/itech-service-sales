# iTech Service Sales — Catálogo de Soluções de TI

Protótipo acadêmico de catálogo executado no console com Node.js. A vitrine apresenta componentes de monitoramento Zabbix e módulos de gestão de serviços ServiceNow, além de uma integração conceitual entre os dois ecossistemas.

> **Escopo didático:** os itens, descrições resumidas e valores apresentados são exemplos para praticar JavaScript. Os preços são fictícios; `R$ 0,00` representa somente um item sem preço atribuído no exercício. O programa não consulta fabricantes, não vende licenças e não realiza uma integração operacional.

## Objetivo e execução

Modelar itens de TI como objetos, exibir um catálogo, selecionar itens com preço demonstrativo e somar o preço de um exemplar de cada item. É necessário ter Node.js instalado com suporte a módulos ECMAScript; não há dependências externas.

```bash
npm run check
npm start
```

`check` verifica a sintaxe dos dois arquivos JavaScript. `start` executa o exemplo e imprime o catálogo e um resumo no terminal.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `Produto.js` | Exporta a classe `Produto`, valida os dados de entrada e apresenta cada item. |
| `index.js` | Importa `Produto`, declara os exemplos Zabbix/ServiceNow e executa as operações de catálogo. |
| `package.json` | Configura ES Modules e os scripts de execução e verificação. |
| `.gitignore` | Exclui dependências, saídas geradas, logs e arquivos de ambiente do versionamento. |

## Conceitos JavaScript aplicados

| Conceito | Uso no projeto |
| --- | --- |
| `class`, `constructor`, `export` e `import` | Modelagem e reutilização da classe `Produto`. |
| `const`, `let` e `var` | Referências do catálogo, contador mutável e exemplo isolado de escopo de função. Em código novo, prefira `const` e `let`. |
| Destructuring e template literals | Leitura dos atributos e composição das linhas exibidas. |
| Função tradicional e arrow function | Cálculo do total e formatação em reais. |
| Objeto literal | Agrupamento do nome, moeda e itens da vitrine. |
| `map`, `filter` e `reduce` | Apresentação, seleção e agregação dos produtos. |
| Operador ternário | Identifica se um item possui preço demonstrativo. |
| Spread (`...`) | Cria uma versão expandida da vitrine sem alterar o catálogo original. |

## Resultado esperado

O catálogo inicial possui **5 itens**: Zabbix Agent, Zabbix Proxy, suporte Zabbix simulado, ServiceNow ITSM e ServiceNow ITOM. Há **3 itens com preço demonstrativo** e o total de um exemplar de cada item é **R$ 3.450,00**. O exemplo de spread mostra **6 itens** na versão expandida e preserva os **5 itens** originais.

Os valores representam apenas números de exemplo por item; não correspondem a propostas comerciais, mensalidades, condições de licenciamento ou tabelas oficiais dos fabricantes.

## Verificação desta versão

Em ambiente local com Node.js 24.19.0, `npm run check` e `npm start` foram executados para validar a sintaxe e a saída do console. Esta verificação não configura um fluxo de CI no GitHub.

## Evolução possível

Adicionar busca, cadastro, persistência e testes de comportamento em etapas futuras, preservando a distinção entre esta simulação acadêmica e integrações reais com Zabbix ou ServiceNow.
