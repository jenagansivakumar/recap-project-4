import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onAddActivity }) {
  const [activityName, setActivityName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const nameInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const newActivity = {
      id: uuidv4(),
      name: activityName,
      isForGoodWeather: isForGoodWeather,
    };
    onAddActivity(newActivity);
    setActivityName("");
    setIsForGoodWeather(false);
    nameInputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new activity</h2>
      <label>
        Name of activity:
        <input
          type="text"
          value={activityName}
          onChange={(event) => setActivityName(event.target.value)}
          ref={nameInputRef}
        />
      </label>
      <label>
        Is it a good-weather activity?
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={(event) => setIsForGoodWeather(event.target.checked)}
        />
      </label>
      <button type="submit">Add Activity</button>
    </form>
  );
}
