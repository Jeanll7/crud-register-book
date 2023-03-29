import { FormBook, InputInfo, ButtonSubmit } from "./style";

function Form(props) {
  const {
    editingId,
    handleSaveEdit,
    handleSubmit,
    bookName,
    author,
    price,
    setPrice,
    setAuthor,
    setBookName,
  } = props;

  return (
    <FormBook onSubmit={editingId !== null ? handleSaveEdit : handleSubmit}>
      {" "}
      {editingId !== null ? (
        <>
          <InputInfo
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            value={bookName}
            placeholder="Nome do Livro"
            type="name"
            onChange={(e) => setBookName(e.target.value)}
          />
          <InputInfo
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
            type="name"
          />
          <InputInfo
            style={{ borderBottom: "solid 2px #0CC0DF" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 0,00"
            type="number"
            min="1"
          />
          <ButtonSubmit style={{ backgroundColor: "#0CC0Df" }} type="submit">
            Salvar
          </ButtonSubmit>
        </>
      ) : (
        <>
          <InputInfo
            placeholder="Nome do Livro"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <InputInfo
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
            type="name"
          />
          <InputInfo
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 0,00"
            type="number"
            min="1"
          />
          <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
        </>
      )}
    </FormBook>
  );
}

export default Form;
