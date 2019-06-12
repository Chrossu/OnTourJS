import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path ="/about" component={About} />
          <Route path ="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
