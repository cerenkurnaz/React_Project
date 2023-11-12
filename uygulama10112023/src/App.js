import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Kategori from "./Kategori";
import Urun from "./Urun";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="d-flex flex-direction-column">
        <Kategori />
        <Urun />
      </div>
    </div>
  );
}

export default App;
