export function CatalogoFiltros({
  categorias,
  categoriaSelecionada,
  busca,
  onCategoriaChange,
  onBuscaChange,
}) {
  return (
    <div className="filtros" aria-label="Filtros do catálogo">
      <div className="campo">
        <label htmlFor="busca-produto">Buscar por nome</label>
        <input
          id="busca-produto"
          type="search"
          value={busca}
          onChange={(evento) => onBuscaChange(evento.target.value)}
          placeholder="Ex.: Zabbix"
        />
      </div>

      <div className="campo">
        <label htmlFor="filtro-categoria">Filtrar por categoria</label>
        <select
          id="filtro-categoria"
          value={categoriaSelecionada}
          onChange={(evento) => onCategoriaChange(evento.target.value)}
        >
          <option value="Todas">Todas</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
