import React from "react";
import Navbar from "./Components/compounds/navbar";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
          <Navbar/>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" />
                <Route path="/signin" />
         </Switch>
    </Router>
    </div>
  );
}

export default App;
