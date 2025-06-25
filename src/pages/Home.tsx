import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
}
const handleSubscribe = async (productId: number) => {
  try {
    await axios.post("http://localhost:5000/api/subscribe", {
      productId
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    alert("Subscribed successfully!");
  } catch (err) {
    console.error(err);
    alert("Subscription failed!");
  }
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") // ganti URL sesuai backend lo
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-10">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
        <h1 className="text-2xl font-bold mb-4">Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{product.title}</h2> {/* ganti name -> title */}
              <p className="text-gray-600 text-sm">{product.description}</p>
              <button
              onClick={() => handleSubscribe(product.id)}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
              Subscribe
              </button>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}
