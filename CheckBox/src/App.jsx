import { useState } from 'react'; 
import './App.css'; 
import data from './notes/data'; 

function App() {
  console.log(data);
  const [selectedCountry, setSelectedCountry] = useState(""); // 
  const [selectedCity, setSelectedCity] = useState(""); 

  console.log(selectedCountry, selectedCity);

  return (
    <div className="select-none">
      {/* Country Dropdown */}
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity(""); // Crucial: Reset city when country changes
        }}
      >
        <option value="">---Select below---</option>
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      {/* City Dropdown */}
      {selectedCountry && (
        <select
          value={selectedCity} 
          onChange={(e) => setSelectedCity(e.target.value)} 
        >
          <option value="">---Select city---</option>
          {data[selectedCountry].map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default App;
