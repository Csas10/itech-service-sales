import { Produto } from './Produto.js';

// Todos os preços abaixo são fictícios e servem apenas ao exercício.
const produtos = [
  new Produto({
    codigo: 'ZBX-AGENT',
    nome: 'Zabbix Agent',
    fabricante: 'Zabbix',
    categoria: 'Componente',
    preco: 0,
    descricao: 'Coleta ilustrativa de métricas dos ativos monitorados.',
  }),
  new Produto({
    codigo: 'ZBX-PROXY',
    nome: 'Zabbix Proxy',
    fabricante: 'Zabbix',
    categoria: 'Componente',
    preco: 0,
    descricao: 'Intermediação ilustrativa da coleta de monitoramento.',
  }),
  new Produto({
    codigo: 'ZBX-SUPORTE',
    nome: 'Suporte Zabbix',
    fabricante: 'Zabbix',
    categoria: 'Serviço',
    preco: 450,
    descricao: 'Item hipotético para demonstrar uma contratação de suporte.',
  }),
  new Produto({
    codigo: 'SN-ITSM',
    nome: 'ServiceNow ITSM',
    fabricante: 'ServiceNow',
    categoria: 'Módulo',
    preco: 1200,
    descricao: 'Exemplo de gestão de incidentes e serviços.',
  }),
  new Produto({
    codigo: 'SN-ITOM',
    nome: 'ServiceNow ITOM',
    fabricante: 'ServiceNow',
    categoria: 'Módulo',
    preco: 1800,
    descricao: 'Exemplo de operações e visibilidade da infraestrutura.',
  }),
];

// Objeto literal que reúne os dados da vitrine.
const catalogo = {
  nome: 'iTech Service Sales — Vitrine de Ativos e Integrações de TI',
  moeda: 'BRL',
  produtos,
};

// Função tradicional e reduce: soma os preços demonstrativos de um exemplar de cada item.
function calcularTotal(itens) {
  return itens.reduce((total, { preco }) => total + preco, 0);
}

// Arrow function para apresentar valores no console.
const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: catalogo.moeda }).format(valor);

// var tem escopo de função; aparece aqui apenas para comparação acadêmica com let e const.
function criarCabecalho() {
  var titulo = catalogo.nome;
  return `=== ${titulo} ===`;
}

console.log(criarCabecalho());
console.log('Valores fictícios para demonstração acadêmica.\n');

// map transforma cada Produto em uma linha de apresentação; destructuring extrai seus campos.
const linhas = catalogo.produtos.map((produto) => {
  const { preco } = produto;
  const tipo = preco === 0 ? 'sem preço atribuído' : 'valor simulado';
  return `${produto.apresentar()} | ${formatarMoeda(preco)} (${tipo})`;
});
// let guarda a numeração crescente durante a apresentação.
let numero = 0;
for (const linha of linhas) {
  numero += 1;
  console.log(`${numero}. ${linha}`);
}

// filter seleciona os itens com preço acima de zero.
const itensComPreco = catalogo.produtos.filter(({ preco }) => preco > 0);

console.log(`\nItens com preço demonstrativo: ${itensComPreco.length}`);
console.log(`Total de um exemplar por item: ${formatarMoeda(calcularTotal(catalogo.produtos))}`);

// Spread cria outro catálogo sem alterar o array nem o objeto originais.
const catalogoExpandido = {
  ...catalogo,
  produtos: [
    ...catalogo.produtos,
    new Produto({
      codigo: 'ZBX-INTEGRACAO',
      nome: 'Integração Zabbix + ServiceNow (exemplo)',
      fabricante: 'iTech',
      categoria: 'Integração',
      preco: 0,
      descricao: 'Fluxo conceitual de eventos de monitoramento para gestão de serviços.',
    }),
  ],
};
console.log(`Catálogo original: ${catalogo.produtos.length} itens`);
console.log(`Catálogo expandido com spread: ${catalogoExpandido.produtos.length} itens`);
