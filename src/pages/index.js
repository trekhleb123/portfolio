import React from "react"
import "./style.css"
import alona from "./alona.png"
import resume from "./Alona_Trekhlib_Resume.pdf"
import { Link } from "gatsby"
import Footer from "./footer"

export default function Home() {
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
              everyone. Read <Link to="/about">about</Link> me, or download my{" "}
              <a href={resume}>resume</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
