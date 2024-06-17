import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  // const format = (userName) => `@${userName}`;

  const formattedUserName = (<span>@userName</span>)
  return (
    // <> = <React.Fragment>
    <>
      <section className="App">
        <TwitterFollowCard
          formattedUserName={formattedUserName}
          isFollowing
          userName="AMAZlNGNATURE"
          name="nATURE IS AMAZING"
        />
        <TwitterFollowCard
          formattedUserName={formattedUserName}
          isFollowing={false}
          userName="EvilAFM"
          name="Alexlcapo"
        />
        <TwitterFollowCard
          formattedUserName={formattedUserName}
          isFollowing
          userName="midudev"
          name="Miguel Ángel Durán"
        />
        <TwitterFollowCard
          formattedUserName={formattedUserName}
          isFollowing
          userName="MoureDev"
          name="Brais Moure"
        />
      </section>
    </>
    // </> = </React.Fragment>
  );
}
