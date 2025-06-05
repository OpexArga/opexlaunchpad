import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
interface Product {
  productId: number;
  quantity: number;
}
interface Subscription {
  id: number;
  products: Product[];
}

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setSubscriptions(res.data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Subscriptions</h1>
      <ul className="space-y-2">
        {subscriptions.map(sub => (
          <li key={sub.id} className="border p-3 rounded">
            <div className="font-medium">{sub.id}</div>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
            {sub.products.map(product => (
                <li key={product.productId}>{product.quantity}</li>
            ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
