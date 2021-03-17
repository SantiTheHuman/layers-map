import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Prototype1 from "./components/Prototype1/Prototype1";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LAYERS</h1>
        <h2>a map your way</h2>
        <h3>currently in development</h3>
        <Link to="/Prototype1">Prototype1</Link>
        <Route exact path="/Prototype1" render={() => <Prototype1 />} />
      </div>
    </Router>
  );
}

export default App;
