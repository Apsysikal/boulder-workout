import { Link } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

export default function ExercisesRoute() {
  return (
    <>
      <h1>Exercices</h1>
      <p>
        These are your exercies. You create exercices and combine one or
        multiple exercies into a workout. Select an exercise to see more details
        or edit it. To add more exercices, click the "Add Exercise" button.
      </p>
      <div>
        <input type="search" name="search" id="exercise-search" />
        <ul>
          <li>
            <Link to="1">Pull Up</Link>
          </li>
          <li>
            <Link to="2">Push Ups</Link>
          </li>
          <li>
            <Link to="3">Hangboarding</Link>
          </li>
          <li>
            <Link to="4">Forearm Antagonist Training</Link>
          </li>
        </ul>
      </div>
      <Link to="new">Add Exercise</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
}
