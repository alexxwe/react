export function TwitterFollowCard({ formattedUserName, userName, name, isFollowing }) {
    console.log(isFollowing)
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar image"
          src={`https://unavatar.io/${userName}/`}
        ></img>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formattedUserName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
