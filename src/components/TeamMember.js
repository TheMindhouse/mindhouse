// @flow
import * as React from 'react'
import './styles/TeamMember.css'
import { Col } from "antd"

type Props = {
  name: string,
  description: string,
  photo: string,
}

const TeamMember = (props: Props) => {
  return (
    <Col xs={24} sm={24} md={8} className="TeamMember">
      <img src={props.photo} className="TeamMember__photo"/>
      <h3 className="TeamMember__name">{props.name}</h3>
      <p className="TeamMember__description">{props.description}</p>
    </Col>
  )
}

TeamMember.defaultProps = {}

export default TeamMember
