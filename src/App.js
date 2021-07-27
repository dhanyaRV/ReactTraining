import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
