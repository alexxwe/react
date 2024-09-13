import { navigate } from "../Link";

export default function HomePage() {
    return (
      <>
      <h1> Home </h1>
      <p> Example page making a react router</p>
      <button onClick={() => navigate('/about')}> About us </button>
      </>
    )
  }