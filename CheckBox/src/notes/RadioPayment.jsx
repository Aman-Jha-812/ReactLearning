import { useState } from "react";
import "./App.css";

function App() {
  
  const [selectedMode, setSelectedMode] = useState('');

  const payments = [
    {id:'UPI',info:'pay first through any upi app'},
    {id:'CARD',info:'pay through debit or credit card'},
    {id:'COD',info:'pay at delivery time'},
  ]
  

  return (
        <div className='select-none'>

            {payments.map(item => {
                return (
                    <label key={item.id} htmlFor={item.id}>
                        <input
                            id={item.id}
                            type="radio"
                            name='payments'
                            value={item.id}
                            checked={selectedMode.id === item.id}
                            onChange={() => setSelectedMode(item)}
                        />
                        {item.id}
                    </label>
                )
            })}

            <p>Mode of payment : {selectedMode.id}</p>
            <p>Details :  {selectedMode.info}</p>

        </div>
    )
}

export default App;
