import './styles/cssReset.css';
import './styles/App.css'
import DateOfBirthInput from './DateOfBirthInput.js';

function App() {
  return (
    <div className="container">
      <div>
        <div>03.08.Date of</div>
        <div className="check"></div><span>ADS-36</span>
      </div>
      <div className="App">
        <DateOfBirthInput />
      </div>
      <div>
        Section 2
      </div>
    </div>
  );
}

export default App;