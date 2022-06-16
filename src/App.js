import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
function App() {
  const product = [
    {
      price: 99999,
      name: "Iphone 13 Pro Max",
      quantity: 0,
    },
    {
      price: 14000,
      name: "Redmi Note 8 Pro",
      quantity: 12,
    },
  ];
  return (
    <div>
      <Navbar />
		  <ProductList pl={product} />
    </div>
  );
}

export default App;
