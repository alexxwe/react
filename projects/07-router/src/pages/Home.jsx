import { Link } from "../Link";

export default function HomePage() {
    return (
      <>
      <h1> Home </h1>
      <p> Example page making a react router</p>
      <Link to='/about'> About us </Link>
      </>
    )
  }