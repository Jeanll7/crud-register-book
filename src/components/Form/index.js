import { SaleForm, InputInfoSale, ButtonSubmit } from "./style";

function Form(props) {
  const {
    editingId,
    handleSaveEdit,
    handleSubmit,
    book,
    author,
    price,
    setBook,
    setAuthor,
    setPrice,
  } = props;

  return (
    <SaleForm onSubmit={editingId !== null ? handleSaveEdit : handleSubmit}>
      {editingId !== null ? (
        <>
          <InputInfoSale
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            placeholder="Livro"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
          <InputInfoSale
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
            type="name"
          />
          <InputInfoSale
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 0,00"
            type="number"
            min="1"
          />
          <ButtonSubmit style={{ backgroundColor: "#0CC0DF" }} type="submit">
            Salvar
          </ButtonSubmit>
        </>
      ) : (
        <>
          <InputInfoSale
            placeholder="Livro"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
          <InputInfoSale
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
            type="name"
          />
          <InputInfoSale
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 0,00"
            type="number"
            min="1"
          />
          <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
        </>
      )}
    </SaleForm>
  );
}

export default Form;
