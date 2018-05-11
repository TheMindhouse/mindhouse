// @flow
import * as React from 'react'
import { Badge, Card, Col, Icon, Row } from 'antd'
import './styles/Project.css'
import { PROJECT_STATUS } from "../helpers/constants"

const { Meta } = Card

type Props = {
  image: string,
  title: string,
  description: string,
  url?: string,
  urlDisplayed?: string,
  status: PROJECT_STATUS,
  github?: string,
}

const ProjectStatusBadge = (props: { status: PROJECT_STATUS }) => {
  switch (props.status) {
    case PROJECT_STATUS.IN_PROGRESS:
      return <Badge status="processing" />
    case PROJECT_STATUS.BETA_AVAILABLE:
      return <Badge status="warning" />
    case PROJECT_STATUS.PUBLISHED:
      return <Badge status="success" />
    default:
      return null
  }
}

const getStatusClassName = (props: { status: PROJECT_STATUS }) => {
  switch (props.status) {
    case PROJECT_STATUS.IN_PROGRESS:
      return 'Project__Status  Project__Status--InProgress'
    case PROJECT_STATUS.BETA_AVAILABLE:
      return 'Project__Status  Project__Status--BetaAvailable'
    case PROJECT_STATUS.PUBLISHED:
      return 'Project__Status  Project__Status--Published'
    default:
      return 'Project__Status'
  }
}

const ProjectHeader = (props: { title: string, status: PROJECT_STATUS }) => {
  return (
    <Row type="flex" justify="space-between" align="middle">
      <span>{props.title}</span>
      <span className={getStatusClassName(props)}>
        <ProjectStatusBadge status={props.status} /> {props.status}
      </span>
    </Row>
  )
}

const getProjectActions = (props: { url?: string, urlDisplayed?: string, github?: string }) => {
  const actions = []
  if (props.url) {
    actions.push(
      <a href={props.url} target="_blank" rel="noopener noreferrer"
         className="Project__Link  Project__Link--primary">
        <Icon type="link" /><span>{props.urlDisplayed}</span>
      </a>
    )
  }
  if (props.github) {
    actions.push(
      <a href={props.github} target="_blank" rel="noopener noreferrer" className="Project__Link">
        <Icon type="github" /><span>GitHub</span>
      </a>
    )
  }
  return actions
}

const WrapInLink = (props: { url?: string, render: () => React.Node }) => {
  if (props.url) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {props.render()}
      </a>
    )
  }
  return props.render()
}


const Project = (props: Props) => {
  return (
    <Col xs={24} sm={24} md={12} className="Project">
      <WrapInLink
        url={props.url}
        render={() =>
          <Card
            className="Project__Card"
            hoverable={props.url}
            style={{ width: '100%' }}
            cover={<img alt="example" src={props.image} />}
            actions={getProjectActions(props)}
          >
            <Meta
              title={<ProjectHeader {...props} />}
              description={props.description}
            />
          </Card>
        }
      />
    </Col>
  )
}

Project.defaultProps = {}

export default Project
