import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav";

function App() {
  let name = "Phúc sẽ cố gắng";
  function handleEventClick() {}
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Reactjs khó VCL nhưng {name}</p>
        <button type="button" onClick={handleEventClick}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
