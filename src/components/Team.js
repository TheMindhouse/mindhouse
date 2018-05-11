// @flow
import * as React from 'react'
import { Row } from "antd"
import TeamMember from "./TeamMember"

type Props = {}

class Team extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section>
        <h2 className="section-title">Team</h2>
        <Row gutter={30} type="flex">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </Row>
      </section>
    )
  }
}

export { Team }
