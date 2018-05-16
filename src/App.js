import React, { Component } from 'react';
import Homepage from "./containers/Homepage"
import ReactGA from 'react-ga'

const hostname = window && window.location && window.location.hostname
if (hostname === 'mindhouse.io') {
  ReactGA.initialize('UA-117937544-2')
}

class App extends Component {
  render() {
    return (
      <div>
        <Homepage/>
      </div>
    );
  }
}

export default App;
