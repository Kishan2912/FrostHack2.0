import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Code } from "./components/Code";
import { Judges } from "./components/Judges";
import { Mentors } from "./components/Mentors";
import {Contactus} from "./components/Contactus";
import {Index} from "./components/Index";
import {Teams} from "./components/Teams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';

// import {Navbar} from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/judges">
          <Judges />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/mentors">
          <Mentors />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
    <Contactus/>
    <Footer/>
  </>
  );
}

export default App;
