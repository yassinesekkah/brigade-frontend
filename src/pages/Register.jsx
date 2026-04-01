import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';


// Register Page
function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); if (formData.password !== formData.confirmPassword) { alert('Les mots de passe ne correspondent pas'); return; } console.log('Register:', formData); };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Créer un compte</h1>
          <p className="text-gray-600 mt-2">Rejoignez-nous dès maintenant</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="reg-email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" id="reg-password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">S'inscrire</button>
          </form>
          <p className="text-center text-gray-600 mt-6">Déjà un compte ? <Link to="/login" className="text-orange-500 font-semibold hover:underline">Se connecter</Link></p>
        </div>
      </div>
    </div>
  );
}
export default Register;