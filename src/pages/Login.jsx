import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect destination (where user wanted to go before login)
  const from = location.state?.from || "/";

  const schema = z.object({
    email: z.email("Email invalid"),
    password: z.string().min(8, "Minimum 8 caractères"),
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
    try{
      setIsLoading(true);
      const res = await api.post("/login", data);
      console.log(res.data);
      const { user, token } = res.data;
      login(user, token);
      navigate(form, { replace: true });

    }catch(err){
      console.log(err);
      setErrMsg("Email ou mot de passe incorrect");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Bon retour !</h1>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                placeholder="votre@email.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100"
              />
              {errors.email && (
                <p className="text-red-500"> {errors.email.message} </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
                placeholder="••••••••"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:bg-gray-100"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            {errMsg && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {errMsg}
              </p>
            )}
            <button
              type="submit"
              disabled={isLoading || !isValid}
              
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Connexion...</span>
                </>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Pas encore de compte ?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
