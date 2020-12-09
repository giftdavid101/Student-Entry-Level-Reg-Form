import React from "react";
import Navbar from "./Components/compounds/navbar";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import StudentReviews from "./pages/studentReviews";
import RegisterPage from "./pages/registerpage";
import SignIn from "./pages/signinpage";

import './App.css';
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
    <Router>
          <Navbar/>
          <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutUs" component={AboutUs}/>
                <Route path="/review" component={StudentReviews}/>
                <Route path="/register" component={RegisterPage}/>
                <Route  path="/signin" component={SignIn} />
                <Route path="/signin" component={Dashboard} />

         </Switch>
    </Router>
    </div>
  );
}

export default App;
