// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
// import {Contactus} from "./components/Contactus";
import {Index} from "./components/Index";
import {Team} from "./components/team";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';

// import {Navbar} from './Components/Navbar'

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/teams">
        <Team />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
