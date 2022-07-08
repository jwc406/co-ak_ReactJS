import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    console.log("change");
  });

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
