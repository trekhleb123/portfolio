import React, { useEffect } from "react"
import "./style.css"
import alona from "./alona.png"
import { Link } from "gatsby"
import Footer from "./footer"

export default function Home() {
  useEffect(() => {
    document.title = "alona trekhlib"
  })
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div id="avatar">
            <img src={alona} />
          </div>
          <div className="bio">
            <h1>Alona Trekhlib</h1>
            <hr />
            <p>
              Hi there! I’m a software developer who is passionate about solving
              problems, great user experience and making web apps better for
              everyone. Read <Link to="/about">about</Link> me, or  <a href="mailto:trekhleb.al@gmail.com" target="_blank">email me</a> if you wanna reach out!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
