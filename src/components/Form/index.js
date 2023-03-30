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
            style={{ borderBottom: "solid 2px #00b4d8" }}
            placeholder="Editar Livro"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
          <InputInfoSale
            style={{ borderBottom: "solid 2px #00b4d8" }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Editar Autor"
            type="name"
          />
          <InputInfoSale
            style={{ borderBottom: "solid 2px #00b4d8" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 0,00"
            type="number"
            min="1"
          />
          <ButtonSubmit
            style={{
              backgroundColor: "#00b4d8",
              border: "solid 1px #004cd8b3",
            }}
            type="submit"
          >
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
