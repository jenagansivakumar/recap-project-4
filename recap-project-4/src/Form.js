import React, { useState } from "react";

function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      isForGoodWeather,
    };

    onAddActivity(data);

    setName("");
    setIsForGoodWeather(false);
    document.querySelector("#name").focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="isForGoodWeather">Good Weather Activity</label>
      <input
        id="isForGoodWeather"
        type="checkbox"
        checked={isForGoodWeather}
        onChange={(event) => setIsForGoodWeather(event.target.checked)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
