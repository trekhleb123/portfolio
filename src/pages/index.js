import React, { useEffect } from "react"
import "./style.css"
import alona from "./alona.png"
import { Link } from "gatsby"
import Footer from "./footer"
import { Helmet } from "react-helmet"

export default function Home() {
  useEffect(() => {
    document.title = "alona trekhlib"
  })
  return (
    <>
      <Helmet meta={[
        { "name": "description", "content": "Alona Trekhlib portfolio site" },
        { "name": "keywords", "content": "blog, development, engineer, web developer, react, gatsby, javascript" },
      ]}>
        <meta charSet="utf-8" />
        <title>alona trekhlib</title>

      </Helmet>
      <div className="main">
        <div className="wrapper">
          <div id="avatar">
            <img src={alona} alt="avatar" />
          </div>
          <div className="bio">
            <h1>Alona Trekhlib</h1>
            <hr />
            <p>
              Hi there! I’m a software developer who is passionate about solving
              problems, great user experience and making web apps better for
              everyone. Read <Link to="/about" title="Go to About Page">about</Link> me, or  <a href="mailto:trekhleb.al@gmail.com" rel="noreferrer" target="_blank" title="Email me">email me</a> if you wanna reach out!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
