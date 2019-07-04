import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { NoMatch } from './components/pages/NoMatch';
import { NavigationBar } from './components/layout/Navigation';

function App() {
  return (
    <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>

  );
}

export default App;
