import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "AMAZlNGNATURE",
    name: "nATURE IS AMAZING",
    isFollowing: true,
  },
  {
    userName: "EvilAFM",
    name: "Alexelcapo",
    isFollowing: false,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "Mouredev",
    name: "Brais Moure",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(user => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}

// export function App() {
//   // const format = (userName) => `@${userName}`;

//   //En el useState
//   //1a posicion del array: valor del estado
//   //2a posicion del array: como actualizar el estado
//   // const [name, setName] = useState('MoureDev')

//   return (
//     // <> = <React.Fragment>
//     <>
//       <section className="App">
//         <TwitterFollowCard initialIsFollowing={true} userName="AMAZlNGNATURE">
//           nATURE IS AMAZING
//         </TwitterFollowCard>

//         <TwitterFollowCard  userName="EvilAFM">
//           Alexlcapo
//         </TwitterFollowCard>

//         <TwitterFollowCard initialIsFollowing userName="midudev">
//           Miguel Ángel Durán
//         </TwitterFollowCard>

//         {/* <TwitterFollowCard isFollowing userName={name}>
//           Brais Moure
//         </TwitterFollowCard>
//         <button onClick={() => setName("midudev")}>Cambio de @ ejemplo</button> */}
//       </section>
//     </>
//     // </> = </React.Fragment>
//   );
// }
