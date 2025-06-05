
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="input mb-3" />
          <input type="password" placeholder="Password" className="input mb-3" />
          <button type="submit" className="btn mb-3">Login</button>
          
        </form>
      </div>
    </div>
  );
}
