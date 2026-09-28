/**
 * Simula a comunicação com uma API externa.
 * fetch() retorna uma Promise; async/await torna o fluxo assíncrono mais legível.
 */
export async function buscarProdutos(signal) {
  const resposta = await fetch('/produtos.json', { signal });

  if (!resposta.ok) {
    throw new Error(`Falha ao carregar produtos: HTTP ${resposta.status}`);
  }

  const dados = await resposta.json();

  if (!Array.isArray(dados)) {
    throw new TypeError('A resposta de produtos deve ser um array.');
  }

  return dados;
}
