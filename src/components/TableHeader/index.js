import { HeaderInfo, GridItemTitle } from "./style.js";

function TableHeader() {
  return (
    <HeaderInfo>
      <GridItemTitle>ID</GridItemTitle>
      <GridItemTitle>Livro</GridItemTitle>
      <GridItemTitle>Autor</GridItemTitle>
      <GridItemTitle>Preço</GridItemTitle>
      <GridItemTitle>Data</GridItemTitle>
      <GridItemTitle>Horário</GridItemTitle>
      <GridItemTitle>Editar</GridItemTitle>
      <GridItemTitle>Excluir</GridItemTitle>
    </HeaderInfo>
  );
}

export default TableHeader;
