import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Footer from './components/Footer';


function App() {

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavTabs />
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
