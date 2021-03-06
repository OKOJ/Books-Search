import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";


function App() {
  return (
     
    <Router>
      <div >
        <Wrapper>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    
  );
}


export default App;
