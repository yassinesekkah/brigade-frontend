import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { plates } from "../data/plates";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

function PlateDetails() {
  const { id } = useParams();
  // const [isLoading, setIsLoading] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const {
    data: plate,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plate", id],
    queryFn: () => api.get(`/plats/${id}`).then((res) => res.data),
  });

  // const plate = plates.find((plate) => plate.id == id);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle AI analysis
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate AI analysis delay
    setTimeout(() => {
      // Random result for demo
      const isRecommended = Math.random() > 0.3;
      setAnalysisResult({
        recommended: isRecommended,
        message: isRecommended
          ? "Ce plat est recommandé pour vous ! Il correspond à vos besoins nutritionnels et préférences alimentaires."
          : "Ce plat n'est pas adapté à votre profil. Il contient des éléments qui ne correspondent pas à vos objectifs nutritionnels.",
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image skeleton */}
              <div className="bg-gray-200 h-72 md:h-96"></div>
              {/* Content skeleton */}
              <div className="p-8 space-y-4">
                <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded-lg w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                <div className="space-y-2 pt-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="pt-6">
                  <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not found state
  if (!plate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Plat introuvable
          </h2>
          <p className="text-gray-500 mb-6">
            Le plat que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/plats"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 mb-6 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Retour</span>
        </Link>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image section */}
            <div className="relative overflow-hidden">
              <img
                src={plate.imageUrl}
                alt={plate.name}
                className="w-full h-72 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Details section */}
            <div className="p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {plate.name}
                </h1>

                {/* Price */}
                <p className="text-2xl font-semibold text-orange-500 mb-4">
                  {plate.price} DH
                </p>

                {/* Availability badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                    plate.is_available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      plate.is_available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {plate.is_available ? "Disponible" : "Indisponible"}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {plate.description}
              </p>

              {/* AI Analysis Section */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <h3 className="font-semibold text-gray-900">
                    Analyse Nutritionnelle
                  </h3>
                </div>

                {/* Analysis result or placeholder */}
                {analysisResult ? (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      analysisResult.recommended
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        analysisResult.recommended
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {analysisResult.recommended ? (
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        analysisResult.recommended
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {analysisResult.message}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Cliquez sur le bouton ci-dessous pour analyser ce plat selon
                    votre profil nutritionnel.
                  </p>
                )}
              </div>

              {/* Analyze button */}
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  plate.is_available
                    ? "bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                    : "bg-gray-300 cursor-not-allowed"
                } ${isAnalyzing ? "opacity-80" : ""}`}
              >
                {isAnalyzing ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Analyse en cours...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <span>Analyser ce plat</span>
                  </>
                )}
              </button>

              {!plate.is_available && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Ce plat n'est pas disponible actuellement
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlateDetails;