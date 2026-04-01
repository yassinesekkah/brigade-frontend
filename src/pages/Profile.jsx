import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile</h1>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2">
        Logout
      </button>
    </div>
  );
}