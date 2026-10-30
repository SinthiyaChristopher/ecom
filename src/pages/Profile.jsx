import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">
          Please Login First
        </h2>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-5">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Profile
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Name
            </h3>
            <p>{user.name}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Email
            </h3>
            <p>{user.email}</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Phone
            </h3>
            <p>{user.phone}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded mt-6 w-full hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}