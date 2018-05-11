// @flow
import * as React from 'react'
import { ProjectList } from "../components/ProjectList"
import { Team } from "../components/Team"
import { Contact } from "../components/Contact"

const Homepage = () => {
  return (
    <div className="container">
      <header className="Header">
        <h1 className="logo">The Mindhouse</h1>
        <span className="emoji-rocket" />
        <p className="section-description">Bringing ideas to life</p>
      </header>

      <ProjectList/>
      <Team/>
      <Contact/>
    </div>
  )
}

Homepage.defaultProps = {}

export default Homepage
