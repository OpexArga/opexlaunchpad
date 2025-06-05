export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form>
          <input type="email" placeholder="Email" className="input mb-3" />
          <input type="password" placeholder="Password" className="input mb-3" />
          <input type="password" placeholder="Repeat Password" className="input mb-3" />
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
}
