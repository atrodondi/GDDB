import React, { Component } from "react";
import "./App.css";
import Cookies from "js-cookie";
import Dashboard from "./pages/dashboard";
import Wizard from "./pages/wizard"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  // componentDidMount() {
  //   this.getCookie();
  // }

  // handle user lop in
  handleUserLogin = (boolean) => {
    console.log("Is user logged in?", boolean);
    this.setState({ loggedIn: boolean });
    
    // this.setState({ userId: })
  };

  // sets loggedIn state to FALSE and removes user id cookie
  handleUserLogout = () => {
    console.log("Logging out user");
    this.setState({ loggedIn: false });
    Cookies.remove("id");
  };

  // function to get the cookies from cookie storage if there is one associated with the session
  getCookie = () => {
    if (Cookies.get("id") === undefined) {
      return " ";
    } else {
      this.setState({ loggedIn: true });
      return Cookies.get("id").slice(3, -1);
    }
  };

  // render
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/">
            <Dashboard
              getCookie={this.getCookie}
              login={this.handleUserLogin}
              logout={this.handleUserLogout}
              loggedIn={this.state.loggedIn}
            ></Dashboard>
          </Route>
          <Route exact path="/wizard">
            <Wizard></Wizard>
          </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
