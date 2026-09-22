import { useState } from "react";
import "./App.css";

function App() {
  // 1. Define the uniform state for form data
  const [formData, setFormData] = useState({
    email: '',
    tc: false
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    
    setFormData({
      ...formData,
      // If it's a checkbox, use 'checked' (boolean), otherwise use 'value' (string)
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 3. Check if all form fields are filled/checked
  const isAllChecked = formData.email.trim() !== "" && formData.tc === true;

  console.log("Is form valid?", isAllChecked);

  return (
    <>
      <input 
        type="email" 
        placeholder="enter email" 
        name="email" 
        value={formData.email} // Fixed lowercase 'f'
        onChange={handleChange} 
      />
      
      <label htmlFor="tc">
        <input 
          type="checkbox" 
          id="tc" 
          name="tc" 
          checked={formData.tc} 
          onChange={handleChange} 
        />
        Terms and conditions
      </label>
    </>
  );
}

export default App;
