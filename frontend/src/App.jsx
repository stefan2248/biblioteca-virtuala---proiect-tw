const carti = [
  { id: 1, title: "Ion", read: false, format: "fizica" },
  { id: 2, title: "Moara cu Noroc", read: true, format: "digital" },
  { id: 3, title: "Enigma Otiliei", read: false, format: "audiobook" }
];

export default function App() {
  const necitite = carti.filter((t) => !t.read).length;

  return (
    <>
      <header className="app-header">
        <h1>Biblioteca Virtuala</h1>
        <p>Gestioneaza colectia ta de carti.</p>
        <p className="app-count">
          {carti.length} carti, dintre care {necitite} necitite
        </p>
      </header>
      <main className="container">
  <section className="panel">
    <h2>Cartile mele</h2>
    {/* Temporar: date brute; componentele apar in Etapa 4 */}
    <pre>{JSON.stringify(carti, null, 2)}</pre>
  </section>
</main>
    </>
  );
}