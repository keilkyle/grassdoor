import LawnDetail from './LawnDetail';
import Home from './Home';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="header">
        <a href="/"><h1>Grassdoor</h1></a>
        <p className="subtitle">A one-stop shop for judging your neighbors.</p>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lawns/:id">
          <LawnDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
