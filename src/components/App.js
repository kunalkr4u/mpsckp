import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <header className="top"></header>
      <section>
        <Menu />
      </section>
      <Footer />
    </div>
  );
}

export default App;
