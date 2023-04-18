import React from "react";

function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <p key={activity.id}>
          {activity.name} - {activity.isForGoodWeather ? "Good" : "Bad"} Weather
        </p>
      ))}
    </ul>
  );
}

export default List;
