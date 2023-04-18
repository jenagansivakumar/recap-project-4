import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import List from "./List";
import "../src/App.css";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities) {
      setActivities(storedActivities);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(newActivity) {
    const id = uuidv4();
    const activity = { ...newActivity, id };
    setActivities([...activities, activity]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
