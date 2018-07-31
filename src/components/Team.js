// @flow
import * as React from 'react'
import { Row } from "antd"
import TeamMember from "./TeamMember"

import BaranPhoto from '../assets/images/team/baran.png'
import GaszynskiPhoto from '../assets/images/team/gaszynski.png'
import MisztalPhoto from '../assets/images/team/misztal.png'
import ZrebiecPhoto from '../assets/images/team/zrebiec.png'

type Props = {}

class Team extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section>
        <h2 className="section-title">Team</h2>
        <p className="section-description">
          We combine our passion for bringing the best ideas to life
          with a mindful, nomadic and joyful way of living.
        </p>
        <Row gutter={30} type="flex">
          <TeamMember
            name="Adrian Baran"
            description="React Front-end"
            photo={BaranPhoto}
          />
          <TeamMember
            name="Chris Gaszynski"
            description="React & Crypto Front-end"
            photo={GaszynskiPhoto}
          />
          <TeamMember
            name="Kris Misztal"
            description="Android & Solidity"
            photo={MisztalPhoto}
          />
          <TeamMember
            name="Karolina Zrebiec"
            description="Graphic Designer"
            photo={ZrebiecPhoto}
          />
        </Row>
      </section>
    )
  }
}

export { Team }
