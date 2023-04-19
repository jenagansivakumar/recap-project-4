export default function Form({ onAddEntry }) {
  const submitData = (event) => {
    event.preventDefault();
    return Object.fromEntries(new FormData(event.target));
  };

  return (
    <form
      action=""
      onSubmit={(event) => {
        onAddEntry(submitData(event));
      }}
    >
      <label htmlFor="activity" name="activity">
        Activity
      </label>
      <input id="activity" name="activity" type="text" />
      <div className="checkboxWrapper">
        <label
          className="suitable"
          htmlFor="isGoodWeather"
          name="isGoodWeather"
        >
          Suitable For Good Weather?
        </label>
        <input
          className="checkbox"
          type="checkbox"
          id="isGoodWeather"
          name="isGoodWeather"
        />
      </div>
      <button type="submit">Submit!</button>
    </form>
  );
}
