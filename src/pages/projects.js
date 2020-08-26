import React, { useEffect } from "react"
import Footer from "./footer"
import "./style.css"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

export default function Projects() {
  useEffect(() => {
    document.title = "alona trekhlib - projects"
  })
  return (
    <div>
      <div className="main">
        <Link to="/">
          <FaHome id="home-icon" />
        </Link>
        <div className="about-wrapper">
          <div className="about">Ear Buds</div>
          <div className="about">PG-13</div>
          <div className="about">Plant Store</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
