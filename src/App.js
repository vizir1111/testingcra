import logo from './logo.svg';
import './App.css';
import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';

function App() {
  const options = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ];
  const selected = [1, 2];
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
      </header>
      <ListBox options={options} selected={selected} />
    </div>
  );
}

export default App;
