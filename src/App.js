import { useEffect, useState } from "react";
import "./GlobalStyles";
import { Container, GlobalStyle } from "./GlobalStyles";
import Form from "./components/Form";
import Table from "./components/Table";
import Error from "./components/ErroMessage";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [book, setBook] = useState("");
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

  // salvar no Local Storage
  useEffect(() => {
    const savedSale = localStorage.getItem("sale");
    if (savedSale) {
      setSale(JSON.parse(savedSale));
    }
  }, []);

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `#${randomNumber.toString().padStart(3, "0")}`;
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("pt-BR", options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return time.toLocaleTimeString("pt-BR", options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book || !author || !price) {
      setIsFieldCompleted(false);
      return;
    }
    const now = new Date();
    const newSale = {
      id: generateId(),
      book,
      author,
      price: parseFloat(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      originalPrice: price,
      date: formatDate(now),
      time: formatTime(now),
    };

    setSale([...sale, newSale]);
    setBook("");
    setAuthor("");
    setPrice("");
    setIsFieldCompleted(true);
    toast.success("Livro adicionada com sucesso!");
  };

  const handleEdit = (id) => {
    console.log("teste");
    const saleToEdit = sale.find((sale) => sale.id === id);
    setBook(saleToEdit.book);
    setAuthor(saleToEdit.author);
    setPrice(saleToEdit.originalPrice);
    setEditingId(id);
    setSelectedSaleId(id);
  };

  const handleCancelEdit = () => {
    setBook("");
    setAuthor("");
    setPrice("");
    setEditingId(null);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!book || !author || !price) {
      setIsFieldCompleted(false);
      return;
    }
    const now = new Date();
    const editedSale = {
      id: editingId,
      book,
      author,
      price: parseFloat(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      originalPrice: price,
      date: formatDate(now),
      time: formatTime(now),
    };
    const newSales = sale.map((sale) =>
      sale.id === editingId ? editedSale : sale
    );
    setSale(newSales);
    setBook("");
    setAuthor("");
    setPrice("");
    setEditingId(null);
    setIsFieldCompleted(true);

    toast("Livro atualizado com sucesso!");
  };

  const handleDelete = (id) => {
    const newSales = sale.filter((sale) => sale.id !== id);
    setSale(newSales);
    setSelectedSaleId(id);
    localStorage.setItem("sale", JSON.stringify(newSales));
    toast.info("Livro deletado com sucesso!");
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer pauseOnHover={false} autoClose={1000} />
      <Container>
        <Form
          editingId={editingId}
          handleSaveEdit={handleSaveEdit}
          handleSubmit={handleSubmit}
          handleCancelEdit={handleCancelEdit}
          book={book}
          author={author}
          price={price}
          setBook={setBook}
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
