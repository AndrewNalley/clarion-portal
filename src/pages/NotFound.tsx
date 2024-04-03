import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <section>
      <h1>Page not found :( </h1>
      <h2>Go to the <NavLink to=''>Homepage</NavLink>.</h2>
    </section>
  )
}