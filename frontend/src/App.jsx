
import { useState } from "react";
import CarteList from "./components/CarteList.jsx";

const CARTI_INITIALE = [
  { id: 1, title: "Ion", read: false, format: "fizica" },
  { id: 2, title: "Moara cu Noroc", read: true, format: "digital" },
  { id: 3, title: "Enigma Otiliei", read: false, format: "audiobook" }
];

function temaInitiala() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export default function App() {
  const [carti, setCarti] = useState(CARTI_INITIALE);

  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
  let noua;

  if (tema === "dark") {
    noua = "light";
  } else {
    noua = "dark";
  }

  setTema(noua);
  document.documentElement.dataset.theme = noua;
}

  function handleToggleCitita(id) {
    setCarti((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, read: !t.read };
        }
        return t;
      })
    );
  }

  function handleDelete(id) {
    setCarti((prev) => prev.filter((t) => t.id !== id));
  }

  const necitite = carti.filter((t) => !t.read).length;

  return (
    <>
      <header className="app-header">
        <h1>Biblioteca Virtuala</h1>
        <p>Gestioneaza colectia ta de carti.</p>
        <p className="app-count">
          {carti.length} carti, dintre care {necitite} necitite
        </p>
          <button type="button" onClick={handleTema}>
            Schimba tema
          </button>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Cartile mele</h2>
          <CarteList
            carti={carti}
            onToggle={handleToggleCitita}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}
