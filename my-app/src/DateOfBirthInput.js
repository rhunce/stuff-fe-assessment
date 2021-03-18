import './styles/DateOfBirthInput.css';

function DateOfBirthInput() {
  return (
    <div>
      <label for="date-of-birth-input">Date of birth</label><br/>
      <input
        type="date"
        id="date-of-birth-input"
        name="date-of-birth-input"
        min="1900-01-01"
        max="2020-12-31"
        onFocus={(e) => {
          console.log('Focused on input');
        }}
      />
    </div>
  );
}

export default DateOfBirthInput;