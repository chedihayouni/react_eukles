import { BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const App = () => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

export default App;