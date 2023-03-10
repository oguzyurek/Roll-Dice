import logo from "./logo.svg";
import "./App.css";
import Dice from "./dice";

function App() {
  return (
    <div className="App">
      <Dice face="three" />
      <Dice face="one" />
    </div>
  );
}

export default App;
