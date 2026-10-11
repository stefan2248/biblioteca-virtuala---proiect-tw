console.log("merge");

const carti = [
    { id: 1, title: "Ion", read: false, format: "fizica" },
    { id: 2, title: "Moara cu Noroc", read: true, format: "digital" },
    { id: 3, title: "Enigma Otiliei", read: false, format: "audiobook" }
];

const FORMATE = ["fizica", "digital", "audiobook"];

function listeazaTitluri(lista) {
 return lista.map((t) => t.title);
}
console.log("Titluri:", listeazaTitluri(carti).join(", "));

function numaraNecitite(lista) {
    return lista.filter((t) => t.read == false).length
}
console.log("Numarul cartilor necitite:", numaraNecitite(carti));

function cautaDupaTitlu(lista, text) {
    const cautare = text.toLowerCase();
    return lista.filter((t) => t.title.toLowerCase().includes(cautare));
}
console.log("Cautare dupa titlu: ", cautaDupaTitlu(carti, "ion"))

function adaugaCarte(lista, title, format) {
    const titlu = title.trim()
    if (titlu == ""){
        console.log("Campul titlu nu poate fi gol!");
        return lista;
    }

    if (!FORMATE.includes(format)){
        console.log("Format invalid!");
        return lista;
    }

    const carteNoua = {
        id:nextId(lista),
        title: titlu,
        read: false,
        format: format
    };
    return [...lista, carteNoua];
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function comutaCitita(lista, id) {
    return lista.map((t) => {
        if (t.id == id) {
            return {...t, read: !t.read};
        }
        return t;
    });
}

function stergeCarte(lista, id) {
    return lista.filter((t) => t.id != id)
}

console.log("--- TESTE CITIRE ---");

console.log("Titluri:", listeazaTitluri(carti).join(", "));

console.log("Carti necitite:", numaraNecitite(carti));

console.log("Cautare dupa titlu:", cautaDupaTitlu(carti, "ion"));

console.log("--- TESTE ADAUGARE ---");

const cartiActualizate = adaugaCarte(carti, "Morometii", "fizica");

console.log("Lista dupa adaugare:", cartiActualizate);
console.log("Lista originala:", carti);

console.log("--- TESTE VALIDARE ---");

adaugaCarte(carti, "", "fizica");

adaugaCarte(carti, "Morometii", "invalid");

console.log("--- TESTE MODIFICARE SI STERGERE ---");

console.log("Dupa schimbarea starii:", comutaCitita(carti, 1));

console.log("Dupa stergere:", stergeCarte(carti, 2));