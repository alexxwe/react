import { navigate } from "../Link";

export default function AboutPage() {
    return (
      <>
      <h1> About </h1>
      <div>
      <img src='https://avatars.githubusercontent.com/u/91157929?s=400&u=09341df1b71e23749a0a9f4f255f52d684fe1fa8&v=4' alt='Profile photo' style={{ borderRadius: '50%' }} ></img>
      <p> Hi! Im Alex, software Developer, this is my React Router practice.</p>
      </div>
      <button onClick={() => navigate('/')}> Home </button>
      </>
    )
  }