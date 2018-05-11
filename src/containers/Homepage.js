// @flow
import * as React from 'react'
import { Card, Col, Row } from 'antd'
import Project from "../components/Project"
import TeamMember from "../components/TeamMember"
import Obfuscate from 'react-obfuscate'
import { ProjectList } from "../components/ProjectList"
import { Team } from "../components/Team"
import { Contact } from "../components/Contact"

const { Meta } = Card

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
