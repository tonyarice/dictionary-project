import logo from "./images/lady_reading.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
     
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1 className="App-name"><span className="App-title">Dictionary<br/></span><span className="App-prompt">What Word Do You Want To Look Up?</span></h1>
      </header>
      <main>
        <br />
        <Dictionary />
          </main>
      <footer className="App-footer">🐈<a href="https://github.com/tonyarice/dictionary-project" className="credit">Open-source code</a> by<a href="https://www.linkedin.com/in/tonyarice" className="credit"> Tonya Rice</a></footer>
      </div>

    </div>
  );
}

