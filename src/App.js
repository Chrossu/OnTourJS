import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/landpage/Home';
import { NoMatch } from './pages/NoMatch';
import Login from './pages/landpage/Login';
import UserHome from './pages/user/UserHome';
import ExecutiveHome from './pages/executive/ExecutiveHome';
import InfoContratos from './components/userTipes/user/contracts/InfoContratos';
import ContractState from './context/contract/ContractState';
import ExecutiveAddContract from './pages/executive/ExecutiveAddContract';
import ListContracts from './pages/user/ListContracts';

const App = () => {
  return (
    <ContractState>
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/ejecutivo' component={ExecutiveHome} />
            <Route exact path='/info-contratos' component={InfoContratos} />
            <Route exact path='/agregar-contrato' component={ExecutiveAddContract} />
            <Route exact path='/lista-contratos' component={ListContracts} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    </ContractState>
  );
}

export default App;
