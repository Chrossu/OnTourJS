import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { NoMatch } from './components/pages/NoMatch';
import Login from './components/pages/Login';
import UserHome from './components/pages/UserHome';
import InfoContratos from './components/layout/InfoContratos';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/info-contratos' component={InfoContratos} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>

  );
}

export default App;
