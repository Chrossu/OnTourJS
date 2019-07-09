import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/landpage/Home';
import { NoMatch } from './components/pages/NoMatch';
import Login from './components/pages/landpage/Login';
import UserHome from './components/pages/user/UserHome';
import ExecutiveHome from './components/pages/executive/ExecutiveHome';
import InfoContratos from './components/contracts/InfoContratos';
import ContractState from './context/contract/ContractState';

const App = () => {
  return (
    <ContractState>
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/executive' component={ExecutiveHome} />
            <Route exact path='/info-contratos' component={InfoContratos} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    </ContractState>
  );
}

export default App;
