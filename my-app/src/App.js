import './styles/cssReset.css';
import './styles/App.css'
import DateOfBirthInput from './DateOfBirthInput.js';

function App() {
  return (
    <div className="container">
      <div className="section-1">
        <div className="date-of">03.08.Date of</div>
        <div className="ads-36"><div className="check"></div><span>ADS-36</span></div>
      </div>
      <div className="App">
        <DateOfBirthInput />
      </div>
    </div>
  );
}

export default App;