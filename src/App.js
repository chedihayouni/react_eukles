import { BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import * as action from "./store/actions/auth.actions";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

axios.defaults.baseURL = 'http://localhost:8002/api';
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(action.logout());
    }
    return Promise.reject(error);
  },
);

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