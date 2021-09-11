import { Fragment } from "react"
import Link from "next/link"

function NewsPage() {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href='/news/911-news'>911 News</Link>
        </li>
        <li>
          <Link href='/news/covid-19-news'>COVID-19 News</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default NewsPage
