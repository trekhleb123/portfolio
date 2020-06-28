import React, { useEffect } from "react"
import Footer from "./footer"
import "./style.css"

export default function Error() {
  useEffect(() => {
    document.title = "alona trekhlib - page not found"
  })
  return (
    <>
      <div>
        <div className="main">
          <div className="about-wrapper">
            <div className="about">
              Not Found
              <p>Ooops, page not found :(</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
