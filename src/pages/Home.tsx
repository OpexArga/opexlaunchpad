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
            <div className="md:w-1/2 max-w-md mx-auto md:mx-0">
                <h1
                className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight mb-2 text-center md:text-left"
                >
                The AI workspace<br />that works for you.
                </h1>
                <p
                className="text-xs sm:text-sm text-gray-700 mb-6 max-w-[280px] mx-auto md:mx-0 text-center md:text-left"
                >
                One place where teams find every answer, automate the busywork, and get
                projects done.
                </p>
                <div className="flex justify-center md:justify-start space-x-3">
                <button
                    className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Get Notion free
                </button>
                <button
                    className="text-xs sm:text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                >
                    Request a demo
                </button>
                </div>
            </div>
            <div
                className="mt-8 md:mt-0 md:w-1/2 flex justify-center space-x-6"
                aria-label="Illustrations of stylized faces"
            >
                <img
                alt="Illustration of a stylized face with red glasses and a red nose"
                className="w-16 h-16 sm:w-20 sm:h-20"
                height="64"
                src="https://storage.googleapis.com/a1aa/image/eae5f038-7228-4194-2df7-688c33aba926.jpg"
                width="64"
                />
                <img
                alt="Illustration of a stylized face with a headset and blue earpiece"
                className="w-16 h-16 sm:w-20 sm:h-20"
                height="64"
                src="https://storage.googleapis.com/a1aa/image/72abf079-0e2e-42a5-17d9-d3a9af2668a3.jpg"
                width="64"
                />
                <img
                alt="Illustration of a stylized face with a neutral expression"
                className="w-16 h-16 sm:w-20 sm:h-20"
                height="64"
                src="https://storage.googleapis.com/a1aa/image/8881ba26-7e02-432c-5c64-f31b2fd355a1.jpg"
                width="64"
                />
            </div>
        </div>
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
  );
}
