import { useState } from "react";

export default function App({ onAddActivity = () => {} }) {
  const [activity, setActivity] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onAddActivity({ activity, isGoodWeather });
    setActivity("");
    setIsGoodWeather(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <label>
        Name of Activity:
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </label>
      <br />
      <label>
        Good Weather Activity:
        <input
          type="checkbox"
          checked={isGoodWeather}
          onChange={(e) => setIsGoodWeather(e.target.checked)}
        />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
