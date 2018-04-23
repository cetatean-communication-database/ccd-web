import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Example from "./components/Example";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Upload from "./components/Upload";
import Search from "./components/Search";
import Intro from "./components/Intro";

import { Provider } from "react-redux";
import { createStore } from "redux";
import ccdApp from "./reducers";

let store = createStore(ccdApp);

class App extends Component {
  render() {
  return (
    <div className="ocean">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/about" component={About} />
            <Route path="/upload" component={Upload} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
  }
}

export default App;
