import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center p-4">
      <Card title="Aman" detail="MERN DEVELOPER & AWS ENTHUEST" />
      <Card title="Adarsh" detail="Lab Asistant in DMCH" />
      <Card title="Ayush" detail="NLU Sikkim" />
      <Card title="Aditya" detail="NLU Megh" />
    </div>
  );
}

export default App;
