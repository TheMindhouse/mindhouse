// @flow
import * as React from 'react'
import { Row } from "antd"
import Project from "./Project"

import CryptoCanvasImage from '../assets/images/projects/cryptocanvas.png'
import MemospeakImage from '../assets/images/projects/memospeak.png'
import CryptoToonsImage from '../assets/images/projects/cryptotoons.png'
import AroundImage from '../assets/images/projects/around.png'
import { PROJECT_STATUS } from "../helpers/constants"

type Props = {}

class ProjectList extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section>
        <Row gutter={30} type="flex">
          <Project
            image={CryptoCanvasImage}
            title="CryptoCanvas"
            description="Creating a new form of art on the Ethereum blockchain. Paint a pixel and become the Blockchain Picasso!"
            url="https://cryptocanvas.art"
            urlDisplayed="cryptocanvas.art"
            status={PROJECT_STATUS.PUBLISHED}
            github="https://github.com/TheMindhouse/cryptocanvas"
          />
          <Project image={MemospeakImage}
                   title="Memospeak"
                   description="Train your memory by memorizing texts with Speech Recognition.
                    Say the text and compare the transcript with the original!"
                   url="https://memospeak.mindhouse.io"
                   urlDisplayed="memospeak.mindhouse.io"
                   status={PROJECT_STATUS.PUBLISHED}
                   github="https://github.com/TheMindhouse/memospeak"
          />
          <Project image={CryptoToonsImage}
                   title="Crypto Toons"
                   description="Entertoonment on the blockchain! In cooperation with WebCartoon Studio we bring you
                   unique collectible characters living in the Ethereum network."
                   url="https://cryptotoons.io"
                   urlDisplayed="cryptotoons.io"
                   status={PROJECT_STATUS.IN_PROGRESS}
          />
          <Project image={AroundImage}
                   title="Around"
                   description="Bringing human interaction back to the real world. Discover people around you and have fun!"
                   url="https://around-app.com"
                   urlDisplayed="around-app.com"
                   status={PROJECT_STATUS.BETA_AVAILABLE}
          />
        </Row>
      </section>
    )
  }
}

export { ProjectList }
