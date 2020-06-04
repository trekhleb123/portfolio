import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export default function Footer() {
  return (
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
          <a href="https://www.linkedin.com/in/alona-trekhlib/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>
        <p>© 2020 Alona Trekhlib</p>
      </div>
    </div>
  )
}
