import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export default function Footer() {
  return (
    <div className="footer">
      <div style={{ padding: "1rem" }}>
        <a href="mailto:trekhleb.al@gmail.com" target="_blank" title="Email me" rel="noreferrer">
          <MdMail style={{ fontSize: "1rem" }} /> <span>Email me</span>
        </a>
      </div>
      <div className="icons">
        <div>
          <a href="https://twitter.com/trekhleb123" rel="noreferrer" target="_blank" title="Open Twitter profile">
            <FaTwitter />
          </a>
        </div>
        <div>
          <a href="https://github.com/trekhleb123" rel="noreferrer" target="_blank" title="Open Github profile">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/alona-trekhlib/" rel="noreferrer" target="_blank" title="Open LinkedIn profile">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>
        <p>© 2022 Alona Trekhlib</p>
      </div>
    </div>
  )
}
