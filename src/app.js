import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path = '/' component={Home} exact/>
                    <Route path = '/portfolio' component={Portfolio}/>
                    <Route path = '/contact' component={Contact}/>
                    <Route component={Error}/>
                </Switch>
        </div>    
    </BrowserRouter>
  );
}

export default App;