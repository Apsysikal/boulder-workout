import { Link } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

export default function WorkoutsRoute() {
  return (
    <>
      <h1>Workouts</h1>
      <div>
        <p>
          Here are your workouts, select one to start training. To create a new
          workout select the "Add a Workout" button.
        </p>
        <ul>
          <li>
            <Link to="1">Finger Strength</Link>
          </li>
          <li>
            <Link to="2">Antagonist Muscels</Link>
          </li>
          <li>
            <Link to="3">Core Training</Link>
          </li>
        </ul>
        <Link to="new">Add a Workout</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
