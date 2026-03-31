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
  const [search, setSearch] = useState("");

  const filtered = plats.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2"
      />
      {filtered.map((f) => 
        <p key={f.name}> {f.name} </p>  
      )}
    </>
  );
}

export default App;
