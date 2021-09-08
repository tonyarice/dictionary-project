import logo from "./images/lady_reading.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
     
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        
      </header>
      <main>
        <Dictionary />
          </main>
      <footer className="App-footer"><a href="https://github.com/tonyarice/dictionary-project">Open-source code</a> by Tonya Rice</footer>
      </div>

    </div>
  );
}

