import logo from './logo.svg';
import './App.css';
import RenderowanieWarunkowe from './RenderowanieWarunkowe';
import FormBasic from './FormBasic';
import FormSelect from './FormSelect';
import FormBox from './FormBox';
import RenderowanieClock from './RenderowanieClock';
import KomponentKlasowyObslugaZdarzen from './KomponentKlasowyObslugaZdarzenia';
import PrzekazywanieDanychCalculator from './PrzekazywanieDanychCalculator';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrzekazywanieDanychCalculator />
      </header>
    </div>
  );
}

export default App;
