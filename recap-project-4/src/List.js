export default function List(props) {
  const {
    activities,
    goodWeatherActivities,
    badWeatherActivities,
    onDeleteActivity,
  } = props;

  return (
    <div className="List">
      <div className="List-section">
        <h2>Good Weather Activities</h2>
        <ul>
          {goodWeatherActivities.map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <button onClick={() => onDeleteActivity(activity.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="List-section">
        <h2>Bad Weather Activities</h2>
        <ul>
          {badWeatherActivities.map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <button onClick={() => onDeleteActivity(activity.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
