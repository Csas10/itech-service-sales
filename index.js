import { Produto } from './Produto.js';

// 1. Variáveis: const, let e var.
const nomeLoja = 'iTech Service Sales';
let descontoPadrao = 0.1;
var categoriaPrincipal = 'Monitoramento';

console.log(`=== ${nomeLoja.toUpperCase()} ===`);
console.log('Vitrine de Ativos e Integrações de TI - Zabbix & ServiceNow');
console.log('Valores fictícios para demonstração acadêmica.\n');

// 2. Função tradicional: recebe preço e desconto e devolve o valor final.
function calcularValorFinal(preco, desconto) {
  return preco * (1 - desconto);
}

// 2. Arrow function equivalente.
const calcularValorFinalArrow = (preco, desconto) => preco * (1 - desconto);

// 3. Objeto literal representando um produto.
const produtoLiteral = {
  nome: 'Conector Customizado Zabbix API',
  preco: 1200,
  categoria: 'Integração',
};

console.log('>>> Objeto literal:');
console.log(produtoLiteral);
console.log(
  `Função tradicional: R$ ${calcularValorFinal(produtoLiteral.preco, descontoPadrao).toFixed(2)}`,
);
console.log(
  `Arrow function: R$ ${calcularValorFinalArrow(produtoLiteral.preco, descontoPadrao).toFixed(2)}`,
);

// 4. Array com 5 produtos. Todos os preços são fictícios.
const catalogoOriginal = [
  new Produto('Zabbix Agent', 0, 'Monitoramento'),
  new Produto('Zabbix Proxy', 0, 'Monitoramento'),
  new Produto('Suporte Zabbix - Exemplo Acadêmico', 450, 'Serviço'),
  new Produto('ServiceNow ITSM', 1200, 'Gestão (ITSM)'),
  new Produto('ServiceNow ITOM', 1800, 'Gestão (ITOM)'),
];

// 4A. map: lista apenas os nomes dos produtos.
const nomesProdutos = catalogoOriginal.map(({ nome }) => nome);
console.log('\n>>> [MAP] Nomes dos produtos:');
console.log(nomesProdutos);

// 4B. filter: filtra uma categoria específica.
const produtosMonitoramento = catalogoOriginal.filter(
  ({ categoria }) => categoria === categoriaPrincipal,
);
console.log(`\n>>> [FILTER] Categoria "${categoriaPrincipal}":`);
produtosMonitoramento.forEach((produto) => console.log(produto.exibirInfo()));

// 4C. reduce: calcula o preço total do catálogo.
const precoTotal = catalogoOriginal.reduce((total, { preco }) => total + preco, 0);
console.log(`\n>>> [REDUCE] Total do catálogo: R$ ${precoTotal.toFixed(2)}`);

// 5. Destructuring + template literal.
const { nome, preco } = catalogoOriginal[3];
console.log('\n>>> [DESTRUCTURING + TEMPLATE LITERAL]');
console.log(`${nome} custa R$${preco.toFixed(2)}`);

// 3. Métodos da classe Produto.
console.log('\n>>> [MÉTODOS DA CLASSE]');
console.log(catalogoOriginal[3].exibirInfo());
console.log(
  `Com ${(descontoPadrao * 100).toFixed(0)}% de desconto: R$ ${catalogoOriginal[3]
    .aplicarDesconto(descontoPadrao)
    .toFixed(2)}`,
);

// 7A. Operador ternário: indica se cada produto está em promoção.
console.log('\n>>> [TERNÁRIO] Status de promoção:');
catalogoOriginal.forEach((produto) => {
  const statusPromocao = produto.preco > 0 && produto.preco <= 1200 ? 'Em promoção' : 'Preço regular';
  console.log(`${produto.nome}: ${statusPromocao}`);
});

// 7B. Spread operator: clona o array e adiciona um novo produto.
const novoProduto = new Produto('Integração Zabbix + ServiceNow', 0, 'Integração');
const catalogoExpandido = [...catalogoOriginal, novoProduto];

console.log('\n>>> [SPREAD] Expansão do catálogo:');
console.log(`Catálogo original: ${catalogoOriginal.length} itens`);
console.log(`Catálogo expandido: ${catalogoExpandido.length} itens`);
