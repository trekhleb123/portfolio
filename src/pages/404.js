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
          <div className="wrapper">
            <div className="bio">
              <h3>
                404
              </h3>
                
              <p>Page not found</p>
        
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
