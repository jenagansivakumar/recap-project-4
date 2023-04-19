export default function Entry({ activity, onRemoveEntry, id }) {
  return (
    <li className="entry-form-text">
      {activity}
      <button
        className="delete-button"
        onClick={() => onRemoveEntry(id)}
        type="button"
      >
        X
      </button>
    </li>
  );
}
