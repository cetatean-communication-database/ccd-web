import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Example from "./components/Example";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Upload from "./components/Upload";

import { Provider } from "react-redux";
import { createStore } from "redux";
import ccdApp from "./reducers";

let store = createStore(ccdApp);

class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Example} />
          <Route path="/about" component={About} />
          <Route path="/upload" component={Upload} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>  
  );
  }
}

export default App;
