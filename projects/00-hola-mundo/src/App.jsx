import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  // const format = (userName) => `@${userName}`;

  return (
    // <> = <React.Fragment>
    <>
      <section className="App">
        <TwitterFollowCard isFollowing userName="AMAZlNGNATURE">
          nATURE IS AMAZING
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing={false} userName="EvilAFM">
          Alexlcapo
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing userName="midudev">
          Miguel Ángel Durán
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing userName="MoureDev">
          Brais Moure
        </TwitterFollowCard>
      </section>
    </>
    // </> = </React.Fragment>
  );
}



