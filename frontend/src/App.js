import LawnDetail from './LawnDetail';
import Home from './Home';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/lawns/:id">
        <LawnDetail />
      </Route>
    </Switch>
  );
}

export default App;
