import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  replace,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Register Page
function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = z
    .object({
      name: z.string().min(1, "Le nom est requis"),
      email: z.email("Adresse email invalide"),
      password: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
      confirmPassword: z.string().min(1, "Veuillez confirmer le mot de passe"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await api.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const { user, token } = res.data;

      login(user, token);

      navigate("/");
    } catch (err) {
      console.log(err);
      setErrMsg("Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Créer un compte</h1>
          <p className="text-gray-600 mt-2">Rejoignez-nous dès maintenant</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name")}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="reg-email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="reg-email"
                name="email"
                {...register("email")}
                placeholder="votre@email.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="reg-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="reg-password"
                name="password"
                {...register("password")}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                {...register("confirmPassword")}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            {errMsg && <p className="text-red-500">{errMsg}</p>}
            <button
              disabled={loading || !isValid}
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              {loading ? "Inscription..." : "S'inscrire"}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Déjà un compte ?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
