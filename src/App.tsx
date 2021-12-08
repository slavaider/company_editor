import React from "react";

import store from "@store/store";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import PersonEditorPage from "./pages/PersonEditorPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={PersonEditorPage} />;
        <Redirect from="*" to="/repos" />
      </Switch>
    </Provider>
  );
};

export default App;
