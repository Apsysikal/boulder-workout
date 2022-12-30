import { Link } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <>
      <h1>Welcome to Boulder Workout</h1>
      <p>Keep track of your workouts and progress with this simple web app.</p>
      <ul>
        <li>
          <Link to="workouts">Workouts</Link>
        </li>
        <li>
          <Link to="exercises">Exercices</Link>
        </li>
      </ul>
    </>
  );
}
