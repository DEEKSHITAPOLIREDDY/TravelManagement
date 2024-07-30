import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContest";


const useSignup=()=>{
    const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

    const signup = async(fullName, username, password, email )=>{
       

        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup",{
                method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, email}),
            });

            const data = await res.json();
            if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("mstor", JSON.stringify(data));
      setAuthUser(data);
            toast.success("Registration Successfull");
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    };
    return {loading,signup};
};
export default useSignup;

function handleInputErrors( fullName, userName, password, email ){
    console.log(fullName,userName,password,email);
    if (!fullName ||  !userName ||   !password || !email) {
    toast.error("Please fill in all fields");
    return false;
  }
   
    if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}