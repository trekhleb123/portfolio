import React, { useEffect } from "react"
import Footer from "./footer"
import "./style.css"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

export default function About() {
  useEffect(() => {
    document.title = "alona trekhlib - about"
  })
  return (
    <div>
      <div className="main">
        <Link to="/">
          <FaHome id="home-icon" />
        </Link>
        <div className="about-wrapper">
          <div className="about">
            Who I Am
            <p>
              Hi, I'm Alona Trekhlib! I was born and raised in Ukraine and now I
              am a Chicago local. I'm currently working as Frontend Developer at Metopio where I create tools to easily access data, analyze it and produce visualizations in minutes. I am passionate about solving problems, great user experience and making web apps better for everyone and I take pride in my high standards of work and creating quality code that lasts.
            </p>
          </div>
          <div className="about">
            Technologies I Know
            <p>
              <b>Proficient:</b> JavaScript, React/Redux, Node.js, Express.js,
              PostgreSQL/Sequelize, Git/Github
            </p>
            <p>
              <b>Knowledgeable:</b> HTML/CSS, Vue, jQuery, Firebase, Webpack, Ant Design,
              Passport, Heroku, Clarifai, Chrome Extensions, Gatsby, Material UI, Bootstrap{" "}
            </p>
            <p>
              <b>Familiar:</b> Babel, Mocha/Chai, Stripe, GraphQL/Apollo,
              Socket.io, Swift/Xcode
            </p>
          </div>
          <div className="about">
            When I Am Not Coding
            <p>
              ...you can find me in my little garden taking care of my herbs and
              vegetables, on a campground, climbing gym or trying yet another
              recipe from my favorite Bon Appétit Magazine!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
