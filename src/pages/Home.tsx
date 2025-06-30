import logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';
import products1 from '../assets/products2.jpg';
import { NavLink } from 'react-router-dom';
import { getToken, clearToken } from "../utils/auth";
import { parseJwt } from "../utils/token";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  type ProductDto = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
  };
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductDto[]>([]);


  useEffect(() => {
    const token = getToken();
    console.log("Token:", token);

    if (token) {
      const payload = parseJwt(token);
      console.log("Decoded JWT Payload:", payload);

      if (payload && payload.email) {
        setUserEmail(payload.email);
      } else {
        console.log("No email in payload");
      }
    } else {
      console.log("No token found");
    }
  }, []);

  const handleLogout = () => {
    clearToken();               // 1. Hapus token dari localStorage
    setUserEmail(null);           // 3. Redirect ke homepage
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products"); // ✅ pakai axios
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="h-16 flex items-center sticky top-0 bg-white shadow-sm z-10">
        <div className="flex items-center px-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <nav className="flex-1">
          <ul className="flex justify-center font-semibold items-center h-full space-x-4">
            <li>
              <a href="#" className="py-2 px-4 text-sm rounded hover:bg-gray-100 transition">Pricing</a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 text-sm rounded hover:bg-gray-100 transition">Request a Demo</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center px-4">
          
          {userEmail == "" || userEmail == null ? (
            <NavLink
              to="/access"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded text-sm font-semibold transition"
            >
              Get Started
            </NavLink>

          ) : (
            <div className="flex">
              <NavLink
                to="/dashboard"
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded text-sm font-semibold transition"
              >
                {userEmail}
              </NavLink>
              <button className="ml-4 bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded text-sm font-semibold transition" onClick={handleLogout}>Logout</button>

            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center mt-16">
        <div className="w-10/12 flex flex-col-reverse md:flex-row items-center md:h-96 gap-8">
          <div className="md:w-3/5 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Power. Simplicity. Intelligent Growth.
            </h1>
            <p className="text-lg md:text-xl mt-6 text-gray-700">
              Empower your organization with AI-driven platforms that connect effortlessly with your systems — driving speed, accuracy, and smarter decisions.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-6 w-max text-sm font-medium transition">
              Request a Demo
            </button>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <img src={hero} alt="Hero Visual" className="h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="flex justify-center mt-24">
        <div className="w-10/12">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48">
                  <img src={products1} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, idx) => (
                      <div key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </div>
                    ))}
                  </div>
                  {userEmail == "" || userEmail == null ? (
                    <button name ="" className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition">
                      Partner Access Required
                    </button>

                  ) : (
                    <button name="" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition">
                      Launch {product.name}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-24">
          <div className="w-10/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-4">
            {/* Wider first column (5/12) */}
            <div className="md:col-span-5 pr-8">
              <img src={logo} alt="Opex Launchpad Logo" className="h-8 mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Opex Launchpad is your gateway to intelligent enterprise tools — from automation to analytics. Explore products designed to power your digital future.
              </p>
            </div>

            {/* Product Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Opex AI</a></li>
                <li><a href="#" className="hover:text-white transition">Opex InvoiceNow</a></li>
                <li><a href="#" className="hover:text-white transition">Opex eInvoice</a></li>
                <li><a href="#" className="hover:text-white transition">Opex eMeterai</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:support@opexlaunchpad.com" className="hover:text-white transition">support@opexlaunchpad.com</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 text-sm text-center py-4 text-gray-500">
            © {new Date().getFullYear()} Opex Launchpad. All rights reserved.
          </div>
        </footer>



      </section>
    </div>
  );
}
