import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import QuickStart from './containers/QuickStart'
import Demos from './containers/Demos'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quick-start" component={QuickStart} />
        <Route path="/demos" component={Demos} />
      </Switch>
    </div>
  );
}

export default App;
