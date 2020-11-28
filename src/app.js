import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;
