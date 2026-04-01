import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';


// Login Page
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Login:', formData); };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Bon retour !</h1>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">Se connecter</button>
          </form>
          <p className="text-center text-gray-600 mt-6">Pas encore de compte ? <Link to="/register" className="text-orange-500 font-semibold hover:underline">S'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
}
export default Login;