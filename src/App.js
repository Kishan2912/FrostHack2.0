import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Code } from "./components/code";
import { Judges } from "./components/judges";
import { Mentors } from "./components/Mentors";
import {Contactus} from "./components/Contactus";
import {Index} from "./components/Index";
import {Teams} from "./components/Teams";
import {Previous} from "./components/Previous";
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
          <Previous />
        </Route>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/previous">
          <Previous />
        </Route>
      </Switch>
    </Router>
    <Contactus/>
    <Footer/>
  </>
  );
}

export default App;
