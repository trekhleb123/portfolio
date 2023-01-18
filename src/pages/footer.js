import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"

export default function Footer() {
  return (
    <div className="footer">
      <div style={{flex: "1"}}/>
      <div className="icons"  style={{flex: "1"}}>
        <div>
          <a href="mailto:trekhleb.al@gmail.com" target="_blank" title="Email me" rel="noreferrer">
          <MdMail /> 
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
      <div  style={{flex: "1", textAlign: "end", paddingRight: "1rem"}}>
        <p>© 2023 Alona Trekhlib</p>
      </div>
    </div>
  )
}
