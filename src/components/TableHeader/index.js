import { TableHeader, GridItemTitle } from "./style.js";

export default function TableHeaderInfo() {
  return (
    <TableHeader>
      <GridItemTitle>ID</GridItemTitle>
      <GridItemTitle>Livro</GridItemTitle>
      <GridItemTitle>Autor</GridItemTitle>
      <GridItemTitle>Preço</GridItemTitle>
      <GridItemTitle>Data</GridItemTitle>
      <GridItemTitle>Horário</GridItemTitle>
      <GridItemTitle>Editar</GridItemTitle>
      <GridItemTitle>Excluir</GridItemTitle>
    </TableHeader>
  );
}
