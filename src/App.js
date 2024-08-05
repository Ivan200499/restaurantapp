import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import StaffApp from './StaffApp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/staff" component={StaffApp} />
      </Switch>
    </Router>
  );
}

export default App;
