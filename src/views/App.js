import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav";

function App() {
  let name = "Phúc sẽ cố gắng";
  let link = "https://facebook.com";
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Reactjs khó VCL nhưng {name}</p>
        <a href={link}>Click Me !!!</a>
      </header>
    </div>
  );
}

export default App;
