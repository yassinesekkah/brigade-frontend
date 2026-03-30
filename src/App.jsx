import { useState } from "react";

function App() {
  const [numbers, setNumber] = useState([1, 2, 3]);

  function handleAdd() {
    const last = numbers[numbers.length - 1] || 0;
    setNumber(prev => [...prev, last + 1]);
  }

  function handleRemove() {
    setNumber(prev => prev.slice(0, -1));
  }

  return (
    <>
      <h1>Number list</h1>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}

      <button onClick={handleAdd}>
        Add number
      </button>

      <button onClick={handleRemove}>
        Remove number
      </button>
    </>
  );
}

export default App;