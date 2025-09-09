"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';import Link from "next/link";
 
export default function VerifyCode() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerifyAndReset = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); // Start loading state

    try {
      const response = await fetch("http://localhost:5000/verify-code", {
        method: "POST", headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email, code, password: newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message on successful password reset
        toast.success(data.message || "Password reset successful!");
        // Redirect after success
        setTimeout(() => {
          router.push("/Main"); // Here i just for testing give route to Khudi Page but when where it have to routing.
        }, 2000); // Redirect after 2 seconds
      } else {
        // Show error message in case of failure
        toast.error(data.message || "Invalid code or email.");
      }
    } 
catch (error) {
  console.error("Reset password error:", error);
  toast.error("Something went wrong. Please try again later.");
}
finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
     
    <form onSubmit={handleVerifyAndReset} className="w-full max-w-md min-w-[320px] mx-auto my-12 bg-white p-8 rounded-lg shadow-md space-y-4">
    <h2 className="text-xl font-bold text-center text-Red">Reset Password</h2> 

    <div className="relative w-full">
      <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
      required className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
      />
      <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Email</label>
    </div>  

    <div className="relative w-full">
      <input type="text" placeholder="Your code" value={code} onChange={(e) => setCode(e.target.value)} 
      required className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
      />
      <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Enter 6 Digits Code</label>
    </div> 

    <div className="relative w-full">
      <input className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
        type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required
      />
      <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Enter New Password</label>
    </div>

<div className="text-center">
  {/* Reset Password Button */}
  <button
    className="w-64 border-1 -mt-4 font-sans serif text-white bg-Red text-xs font-semibold py-2 rounded hover:bg-Red"
    type="submit"
    disabled={loading}
  >
    {loading ? "Resetting..." : "Reset Password"}
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
  <Link href="/Forgot-Password" className="block text-sm font-sans serif text-Red hover:text-Blue font-bold">
    Forgot Password
  </Link>
</div>

    <ToastContainer />
     </form>
    );}