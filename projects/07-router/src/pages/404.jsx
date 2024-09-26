import { Link } from "../Link";
const gifs = {
    1:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ZuYnU5Y2M4cTJ6dzBlb3NvNnloMG96a251b3I3M2p3NGx0bnpkcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kF0ngyP7S1DfmzKqiN/giphy.webp',
    2:'https://media1.giphy.com/media/JsE9qckiYyVClQ5bY2/giphy.webp?cid=ecf05e477hqljvcxj6o1sf7fv26139zxvhpznvaepuxaoy1y&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    3:'https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.webp?cid=ecf05e47ocu3s1wowzza2mo29k1rh72wmslebtahkx9f4kdx&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    4:'https://media1.giphy.com/media/UgRfRYyNnQlLXUoLk3/200.webp?cid=ecf05e47t4sb0k3qdw8u7osnerb1y79qblib7wu59t5xt9oa&ep=v1_gifs_search&rid=200.webp&ct=g',
    5:'https://midu.dev/images/this-is-fine-404.gif',
}

export default function Page404 () {
    const randomGif = gifs[Math.floor(Math.random() * Object.keys(gifs).length) + 1]

    return(
    <>
        <h1>Ups, something went wrong</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{borderRadius:'50%', maxHeight:'500px'}} src={randomGif} alt="404 error Image"></img>
        </div>
        <Link to='/' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'16px', fontSize:'24px' }}>Home</Link>
    </>
    )
}