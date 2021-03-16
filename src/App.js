import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Placeholder from "./components/Placeholder/Placeholder";
import Prototype1 from "./components/Prototype1/Prototype1";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Placeholder />} />
        <Route exact path="/app" render={() => <Prototype1 />} />
      </div>
    </Router>
  );
}

export default App;
