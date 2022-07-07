import "./App.css";
import DayList from "./components/DayList";
import Header from "./components/Header";
import Day from "./components/Day";

function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
