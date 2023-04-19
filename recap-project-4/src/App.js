import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [activities, setActivities] = useState([]);
  const [goodWeatherActivities, setGoodWeatherActivities] = useState([]);
  const [badWeatherActivities, setBadWeatherActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(
      localStorage.getItem("activities") || "[]"
    );
    setActivities(storedActivities);
  }, []);

  useEffect(() => {
    const filteredActivities = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
    setGoodWeatherActivities(filteredActivities);
    const filteredActivities2 = activities.filter(
      (activity) => activity.isForGoodWeather === false
    );
    setBadWeatherActivities(filteredActivities2);
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List
        goodWeatherActivities={goodWeatherActivities}
        badWeatherActivities={badWeatherActivities}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}

export default App;
