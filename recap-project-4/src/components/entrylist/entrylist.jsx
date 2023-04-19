import Entry from "../entry/entry";

export default function Entrylist({ activities, onRemoveEntry }) {
  return (
    <>
      <div className="entryList">
        <h2 className="weather-activies"> Activities</h2>
        {activities.map((activity) => (
          <Entry
            className="entry-text"
            key={activity.id}
            id={activity.id}
            activity={activity.activity}
            onRemoveEntry={onRemoveEntry}
          />
        ))}
      </div>
    </>
  );
}
