
import CarteCard from "./CarteCard.jsx";

export default function CarteList({ carti, onToggle, onDelete }) {
  if (carti.length === 0) {
    return <p className="empty">Nu exista nicio carte.</p>;
  }

  return (
    <ul className="item-list">
      {carti.map((carte) => (
        <CarteCard
          key={carte.id}
          carte={carte}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
