// @flow
import * as React from 'react'
import Obfuscate from "react-obfuscate"

type Props = {}

class Contact extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section className="text-center" style={{ paddingBottom: 100 }}>
        <h2 className="section-title">Contact</h2>
        <p className="section-description">
          If you have any thoughts, questions or suggestions,<br />
          you are welcome to contact us at <b><Obfuscate email='team@mindhouse.io' /></b>
        </p>
        <p className="section-description">
          <b>We are available for hire.</b><br />
          Let us know about your project.
        </p>
      </section>
    )
  }
}

export { Contact }
