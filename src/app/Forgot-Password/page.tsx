"use client"; import { useState } from "react";import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-code", 
      {
        method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) 
      { toast.success(data.message || "Confirmation code sent to your email.") } 
      else 
      { toast.error(data.message || "User not found."); }
    } 

catch (error) {
  console.error("Forgot password error:", error);
  toast.error("Something went wrong. Please try again later.");
}

    finally {setLoading(false);}
};

  return (
 
    <form onSubmit={handleSendCode}  className="w-full max-w-md min-w-[320px] mx-auto my-12 bg-white p-8 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold text-center text-Red">Forgot Password</h2>
       
      <div className="relative w-full">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
        className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
      />
      <label className="absolute left-3 top-1 text-sm text-customBlue font-bold">Email</label>
      </div>

<div className="text-center">
  {/* Reset Password Button */}
      <button type="submit" disabled={loading} 
      className="w-64 border-2 text-white bg-Red text-xs font-semibold py-2 rounded hover:bg-Red">
      {loading ? "Sending..." : "Send Confirmation Code"}
      </button>

  {/* Spacer */}
  <h6 className="mt-4"></h6>

  {/* Back to Home Link */}
  <Link href="/#Home" className="block text-sm font-sans serif text-Red hover:text-Blue font-bold">
    Back to Home
  </Link>

  {/* Divider line */}
  <div className="flex items-center justify-center my-2">
    <hr className="w-1/4 border-gray" />
    <span className="px-2 text-xs font-sans serif font-semibold text-gray">OR</span>
    <hr className="w-1/4 border-gray" />
  </div>

  {/* Login Link */}
  <Link href="/login" className="block text-sm font-sans serif text-Red hover:text-Blue font-bold">
    Login
  </Link>
</div>

    <ToastContainer />

    </form>
  
);}
export default ForgotPassword;