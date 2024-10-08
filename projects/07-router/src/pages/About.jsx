import { useI18n } from "../components/lang/i18n";
import { Link } from "../Link";


export default function AboutPage( routeParams ) {
  const i18n = useI18n(routeParams.lang ?? 'en')

    return (
      <>
      <h1> { i18n.title } </h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/91157929?s=400&u=09341df1b71e23749a0a9f4f255f52d684fe1fa8&v=4' alt='Profile photo' style={{ borderRadius: '50%' }} ></img>
        <p> { i18n.description }</p>
      </div>
      <Link to='/'> { i18n.button } </Link>
      </>
    )
  }