import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
            <h3>oops whatever you were looking for probably doesn't exist. This is a dead end. </h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>

      </main>
    </Layout>
  
  )
}

export default Error
