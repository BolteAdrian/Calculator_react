import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import './Calculator.css';
function App() {

setTimeout(() => {
  
  setTimeout(() => {
  
  }, 5*1000);

}, 3*1000);

  return (
    <div className="App">
      <header className="App-header">
        <img align="left" src={logo} className="App-logo" alt="logo" />
       
        <Calculator />
      </header>
    </div>
  );
}

export default App;
