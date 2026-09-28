import './ProdutoCard.css';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

export function ProdutoCard({ nome, preco, categoria, promocao, children }) {
  return (
    <article className={`produto-card ${promocao ? 'produto-card--promocao' : ''}`}>
      <div className="produto-card__topo">
        <span className="produto-card__categoria">{categoria}</span>
        {promocao ? <span className="badge-promocao">Em promoção</span> : null}
      </div>

      <h3>{nome}</h3>

      <p className="produto-card__preco">
        {preco > 0 ? formatarMoeda(preco) : 'Sem preço demonstrativo'}
      </p>

      <p className="produto-card__nota">Valor fictício para atividade acadêmica.</p>

      {children ? <div className="produto-card__acoes">{children}</div> : null}
    </article>
  );
}
