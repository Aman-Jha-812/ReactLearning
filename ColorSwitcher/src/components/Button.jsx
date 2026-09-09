const Button = ({ color, setSelectedColor, children }) => {
  function setColor() {
    setSelectedColor(color);
  }

  return (
    <div>
      <button 
        onClick={setColor} 
        style={{ backgroundColor: color }}
        className="px-4 py-2 rounded text-white font-medium capitalize shadow"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
