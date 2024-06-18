export function TwitterFollowCard({ children, userName, isFollowing }) {

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar image"
          src={`https://unavatar.io/${userName}/`}
        ></img>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
// 1:23:00 diferencia entre componente y elemento
// Un componente podriamos decir que es una "factoria" de elementos
// Un componente sería una funcion y al ejecutarla devuelve un elementos
// El elemento es lo que renderiza react
