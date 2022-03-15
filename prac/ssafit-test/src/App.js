import { Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Start} exact />
        <Route path="/main" component={Main} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
