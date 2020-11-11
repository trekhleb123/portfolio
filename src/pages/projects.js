import React, { useEffect } from "react"
import Footer from "./footer"
import "./style.css"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"
import ReactPlayer from "react-player"

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
          <div className="plant-store">
            <p>Fully functional mock e-commerce website for selling plants</p>
            <iframe
              style={{ width: "300px", height: "300px" }}
              src="https://drive.google.com/file/d/1r3c6tYSDGhlMsepBaQgHA6o0kPGf8S1a/preview"
              width="640"
              height="480"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
