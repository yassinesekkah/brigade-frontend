
import Header from "./components/Header";

import { useState } from "react";

const plats = [
  {
    name: "Pizza",
    price: 42,
    is_available: true,
    imageUrl: "/images/Pizza.jpg",
  },
  {
    name: "Tajine",
    price: 94,
    is_available: false,
    imageUrl: "/images/Tajine.jpg",
  },
  {
    name: "Burger",
    price: 55,
    is_available: true,
    imageUrl: "/images/Burger.jpg",
  },
];



function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header/>

      {/* <div className="flex gap-4 p-2">
        {plats.map((plat) => (
          <PlateCard key={plat.id} {...plat} />
        ))}
      </div> */}

      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
}

export default App;
