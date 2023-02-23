import "./App.css";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Greeting name={"test"} />
    </div>
  );
}

export default App;
