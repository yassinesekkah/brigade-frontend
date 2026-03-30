import PlateCard from "./components/PlateCard";
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
  return (
    <>
      <h1>MENU</h1>

      <div className="flex gap-4 p-2">
        {plats.map((plat) => (
          <PlateCard key={plat.id} {...plat} />
        ))}
      </div>
    </>
  );
}

export default App;
