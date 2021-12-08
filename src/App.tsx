import React from "react";

import store from "@store/store";
import { Provider } from "react-redux";

import PersonEditorPage from "./pages/PersonEditorPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersonEditorPage />
    </Provider>
  );
};

export default App;
