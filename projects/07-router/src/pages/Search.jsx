import { useEffect } from "react"

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query}`

  }, [])

  return <h1>You searched for: {routeParams.query}</h1>
}
