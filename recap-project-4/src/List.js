import React from "react";

const List = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity.activity}</li>
      ))}
    </ul>
  );
};

export default List;
