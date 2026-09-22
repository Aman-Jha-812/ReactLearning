import { useState } from "react";
import "./App.css";

function App() {
  const [paymentMode, setPaymentMode] = useState("");

  console.log(paymentMode);

  return (
    <div className="select-none">
      <select
        defaultValue={paymentMode}
        onChange={(e) => {
          setPaymentMode(e.target.value);
        }}
      >
        <option value="">---Select below---</option>
        <option value="upi">UPI</option>
        <option value="card">CARD</option>
        <option value="cod">COD</option>
      </select>
    </div>
  );
}

export default App;
