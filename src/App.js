import { useState } from "react";
import "./GlobalStyles";
import { Container, GlobalStyle } from "./GlobalStyles";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [bookName, setBookName] = useState("");

  return (
    <>
      <GlobalStyle />
      {/* <ToatContainer pouseOnHover={false} autoClose={1000} /> */}
      <Container>
        <Form
          editingI={editingI}
          handleSaveEdit={handleSaveEdit}
          handleSubmit={handleSubmit}
          handleCancelEdit={handleCancelEdit}
          employee={bookName}
          author={author}
          price={price}
          setBookName={setBookName}
          setAuthor={setAuthor}
          setPrice={setPrice}
        />
        {!isFieldCompleted && (
          <Error message={"Todos os campos precisam ser preenchidos."} />
        )}
        <Table
          sale={sale}
          selectedSaleId={selectedSaleId}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          editingId={editingId}
          handleCancelEdit={handleCancelEdit}
        />
      </Container>
    </>
  );
}

export default App;
