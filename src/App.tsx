import * as React from "react";
import { Provider } from "react-redux";

import TripPlanner from "./containers/TripPlanner";
import store from "./redux/store";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <TripPlanner />
      </Provider>
    );
  }
}

export default App;
