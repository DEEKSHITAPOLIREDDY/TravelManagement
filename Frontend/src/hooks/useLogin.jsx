import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContest";


const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
   // const success = handleInputErrors(userName, password);
   // if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("mstor", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login Successfull")
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors(userName, password) {
  if (!userName || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}