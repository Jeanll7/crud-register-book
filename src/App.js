import { useEffect, useState } from "react";
import "./GlobalStyles";
import { Container, GlobalStyle } from "./GlobalStyles";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState([]);
  const [isFieldCompleted, setIsFieldCompleted] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [selectedSaleId, setSelectedSaleId] = useState(null);

  useEffect(() => {
    if (sale.length > 0) {
      localStorage.setItem("sale", JSON.stringify(sale));
    }
  }, [sale]);

  // recuperar livro salvo no local Storage ao carregar o componente
  useState(() => {
    const savedSale = localStorage.getItem("sale");
    if (savedSale) {
      setSale(JSON.parse(savedSale));
    }
  }, []);

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return `#${randomNumber.toString().padStart(3, "0")}`;
  };

  const formatDate = (date) => {
    const options = { day: "2-digt", month: "2-digt", year: "numeric" };
    return date.toLocaleDateString("pt-BR", options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return time.toLocaleTimeString("pt-BR", options);
  };

  return (
    <>
      <GlobalStyle />
      {/* <ToatContainer pouseOnHover={false} autoClose={1000} /> */}
      <Container>
        <Form
          editingI={editingId}
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
