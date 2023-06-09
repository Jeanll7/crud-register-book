import React from "react";
import TableHeader from "../TableHeader";
import {
  Tr,
  GridItem,
  SalesTable,
  TableBody,
  IconCancelEdit,
  IconEdit,
  IconDelete,
} from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Table(props) {
  const {
    sale,
    selectedSaleId,
    handleEdit,
    handleDelete,
    editingId,
    handleCancelEdit,
  } = props;

  return (
    <SalesTable>
      <TableHeader />
      <TableBody>
        {sale.map((sale) => (
          <Tr key={sale.id}>
            <GridItem data-label="ID">{sale.id}</GridItem>
            <GridItem data-label="Livro">{sale.book}</GridItem>
            <GridItem data-label="Autor">{sale.author}</GridItem>
            <GridItem data-label="Preço">{sale.price}</GridItem>
            <GridItem data-label="Data">{sale.date}</GridItem>
            <GridItem data-label="Horário">{sale.time}</GridItem>
            <GridItem data-label="Editar">
              {sale.id === selectedSaleId && editingId !== null ? (
                <IconCancelEdit>
                  <MdCancel onClick={handleCancelEdit}></MdCancel>
                </IconCancelEdit>
              ) : (
                <IconEdit>
                  <FaEdit onClick={() => handleEdit(sale.id)}></FaEdit>
                </IconEdit>
              )}
            </GridItem>
            <GridItem data-label="Excluir">
              <IconDelete>
                <FaTrashAlt onClick={() => handleDelete(sale.id)} />
              </IconDelete>
            </GridItem>
          </Tr>
        ))}
      </TableBody>
    </SalesTable>
  );
}
