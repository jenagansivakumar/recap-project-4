import React, { useState } from "react";

const Form = ({ onAddActivity }) => {
  const [activity, setActivity] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newActivity = { activity, isForGoodWeather };
    onAddActivity(newActivity);
    setActivity("");
    setIsForGoodWeather(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Weather and Activity App</h2>
      <label htmlFor="activity">Activity:</label>
      <input
        placeholder="write what you would like to do"
        type="text"
        id="activity"
        value={activity}
        onChange={(event) => setActivity(event.target.value)}
      />
      <br />
      <label htmlFor="isForGoodWeather">
        Is it suitable for sunny weather?
      </label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        checked={isForGoodWeather}
        onChange={() => setIsForGoodWeather(!isForGoodWeather)}
      />
      <br />
      <button className="submit-button" type="submit">
        Add Activity
      </button>
    </form>
  );
};

export default Form;
