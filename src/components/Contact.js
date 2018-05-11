// @flow
import * as React from 'react'
import Obfuscate from "react-obfuscate"

type Props = {}

class Contact extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section className="text-center" style={{ marginBottom: 100 }}>
        <h2 className="section-title">Contact</h2>
        <p>
          If you have any thoughts, questions or suggestions,<br />
          you are welcome to contact us at <b><Obfuscate email='team@mindhouse.io' /></b>
        </p>
      </section>
    )
  }
}

export { Contact }
