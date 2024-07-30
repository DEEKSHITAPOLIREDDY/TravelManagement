import { useState } from "react";

import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContest";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
     

      localStorage.removeItem("mstor");
      setAuthUser(null);
            toast.success("Logout Successfull");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;