
const ETICHETE_FORMAT = {
  fizica: "fizica",
  digital: "digital",
  audiobook: "audiobook"
};

export default function CarteCard({ carte, onToggle, onDelete }) {
  let clasaCard = "item-card";

  if (carte.read) {
    clasaCard = "item-card done";
  }

  let clasaBadge = "badge badge-" + carte.format;

  if (carte.format === "digital") {
    clasaBadge = "badge badge-digitala";
  }

  return (
    <li className={clasaCard}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={carte.read}
          onChange={() => onToggle(carte.id)}
        />
        <div>
          <h3>{carte.title}</h3>
          <span className={clasaBadge}>
            {ETICHETE_FORMAT[carte.format]}
          </span>
        </div>
      </label>

      <span className="status">
        {carte.read ? "Citita" : "Necitita"}
      </span>

      <button
        className="btn-danger"
        onClick={() => onDelete(carte.id)}
        aria-label={`Sterge ${carte.title}`}
      >
        Sterge
      </button>
    </li>
  );
}
