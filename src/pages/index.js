import React from "react"
import "./style.css"
import alona from "./alona.png"
import resume from "./Alona_Trekhlib_Resume.pdf"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export default function Home() {
  return (
    <>
      <div className="main">
        <div id="avatar">
          <img src={alona} />
        </div>
        <div className="bio">
          <h1>Alona Trekhlib</h1>
          <hr />
          <p>
            Hi there! I’m a software developer who is passionate about solving
            problems, great user experience and making web apps better for
            everyone. Read about me, or download my <a href={resume}>resume</a>.
          </p>
        </div>
      </div>
      <div className="footer">
        <div>
          <a href="mailto:trekhleb.al@gmail.com" target="_blank">
            <MdMail style={{ fontSize: "1rem" }} /> <span>Email me</span>
          </a>
        </div>
        <div className="icons">
          <div>
            <a href="https://twitter.com/trekhleb123" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href="https://github.com/trekhleb123" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/alona-trekhlib/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div>
          <p>© 2020 Alona Trekhlib</p>
        </div>
      </div>
    </>
  )
}
