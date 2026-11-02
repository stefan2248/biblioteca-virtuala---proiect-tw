
import { useEffect, useState } from "react";
import CarteList from "./components/CarteList.jsx";
import { fetchCarti } from "./api.js";

function temaInitiala() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export default function App() {
  const [carti, setCarti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchCarti();

        console.log("Carti primite de la API:", data);

        if (!ignore) {
          setCarti(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

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

          {loading && (
            <p className="info">Se incarca biblioteca...</p>
          )}

          {error && (
            <p className="error">
              Nu am putut incarca datele: {error}.
              Ruleaza <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
            <CarteList
              carti={carti}
              onToggle={handleToggleCitita}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}
