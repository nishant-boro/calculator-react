import logo from './logo.svg';
import './App.css';
import './Styles/style.css'
import Calculator from './Components/Calculator/Calculator';

function App() {
  document.title = "Calculator App";

  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
