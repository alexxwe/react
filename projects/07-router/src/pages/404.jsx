import { Link } from "../Link";

export default function Page404 () {
    return(
    <>
        <div>
            <h1>Ups, something went wrong</h1>
            <img src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.webp?cid=ecf05e47ocu3s1wowzza2mo29k1rh72wmslebtahkx9f4kdx&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="404 error Image"></img>
        </div>
        <Link to='/'>Home</Link>
    </>
    )
}