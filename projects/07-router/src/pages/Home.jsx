import { useI18n } from "../components/lang/i18n";
import { Link } from "../Link";

export default function HomePage(routeParams) {
  const i18n = useI18n(routeParams.lang ?? 'en')

    return (
      <>
        <h1> { i18n.h1 } </h1>
        <p> { i18n.p }</p>
        <Link to='/about'> {i18n.title} </Link>
      </>
    )
  }