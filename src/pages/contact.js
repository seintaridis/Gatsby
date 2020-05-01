import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact me</h1>
      <h2>
        <ul>
          <li>
            <a href="https://github.com/seintaridis">
              GitHub <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/seintaridis">
              Linkedin <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </h2>
    </Layout>
  )
}

export default Contact
