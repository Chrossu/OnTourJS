import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/landpage/Home';
import { NoMatch } from './pages/NoMatch';
import Login from './pages/landpage/Login';
import UserHome from './pages/user/UserHome';
import ExecutiveHome from './pages/executive/ExecutiveHome';
import InfoContratos from './components/userTipes/user/contracts/InfoContratos';
import ExecutiveAddContract from './pages/executive/ExecutiveAddContract';
import ListContracts from './pages/user/ListContracts';
import Deposit from './pages/user/Deposit';
import ExecutiveRegister from './pages/executive/ExecutiveRegister';
import setAuthToken from './utils/setAuthToken';

import ContractState from './context/contract/ContractState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
    <ContractState>
      <AlertState>
      <Router>
        <React.Fragment>
          <Switch>
            {/* Landing page pages */}
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Login} />
            {/* User pages */}
            <PrivateRoute exact path='/user' component={UserHome} />
            <PrivateRoute exact path='/user/contratos' component={InfoContratos} />
            <PrivateRoute exact path='/user/lista-contratos' component={ListContracts} />
            <PrivateRoute exact path='/user/depositar' component={Deposit} />
            {/* Executive pages */}
            <Route exact path='/ejecutivo' component={ExecutiveHome} />
            <Route exact path='/ejecutivo/agregar-contrato' component={ExecutiveAddContract} />
            <Route exact path='/ejecutivo/nuevo-usuario' component={ExecutiveRegister} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
      </AlertState>
    </ContractState>
    </AuthState>
  );
}

export default App;
