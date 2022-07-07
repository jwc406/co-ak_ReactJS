import { BrowserRouter, Route, Switch } from "react-router-dom";
import DayList from "./components/DayList";
import Header from "./components/Header";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
