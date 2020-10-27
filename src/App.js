import React, {useState}from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="App">
      <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat='dd/MM/yyyy'
      />
    </div>
  );
}

export default App;
