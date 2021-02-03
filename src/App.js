import React, { useState, useEffect } from "react";
import "./App.css";

// https://stark-spire-22280.herokuapp.com/api/books

function App() {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://stark-spire-22280.herokuapp.com/api/books"
      );
      const json = await response.json();
      console.log("json", json);
      setBooks(json.data);
      return json;
    };

    fetchBooks();
  }, []);

  const handleChangeCounter = (value) => {
    const newCounter = counter + value;
    if (newCounter >= 0 && newCounter <= 10) {
      setCounter(newCounter);
    } else {
      alert("Valor no permitido");
    }
  };

  // const obj = {
  //   name: "Chalo",
  //   lastname: "Salvador",
  // };
  // for (let property in obj) {
  //   console.log("property", obj[property]);
  // }

  return (
    <>
      <input type="text" value={counter} onChange={() => {}} />
      <button onClick={() => handleChangeCounter(1)}>Incrementar</button>
      <button onClick={() => handleChangeCounter(-1)}>Disminuir</button>

      <h1>Lista de libros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
