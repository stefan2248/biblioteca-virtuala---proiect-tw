const ETICHETE_FORMAT = {
  fizica: "fizica",
  digital: "digital",
  audiobook: "audiobook"
};

export default function CarteCard({ carte }) {
  return (
    <li className={carte.read ? "task-card done" : "task-card"}>
      <div>
        <h3>{carte.title}</h3>
        <span className={`badge badge-${carte.format}`}>
          {ETICHETE_FORMAT[carte.format]}
        </span>
      </div>
      <span className="status">
        {carte.read ? "Citita" : "Necitita"}
      </span>
    </li>
  );
}
