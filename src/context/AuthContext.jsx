import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(
      localStorage.getItem("user")
    ) || null;
  });

  const [isAuthenticated, setIsAuthenticated] =
    useState(!!user);

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Register User
  const register = (userData) => {
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(userData)
    );

    setUser(userData);
    setIsAuthenticated(true);
  };

  // Login User
  const login = (email, password) => {
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setUser(registeredUser);
      setIsAuthenticated(true);

      localStorage.setItem(
        "user",
        JSON.stringify(registeredUser)
      );

      return {
        success: true,
        message: "Login Successful",
      };
    }

    return {
      success: false,
      message: "Invalid Email or Password",
    };
  };

  // Logout User
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};