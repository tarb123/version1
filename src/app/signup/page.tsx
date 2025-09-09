"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "../components/GoogleLoginButton";
const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  type AuthResponse = {
    token: string;
    message?: string;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<AuthResponse>(
        "http://192.168.18.62:5000/signup",formData
      );
  
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        setMessage("Signup successful!");
        router.push("/FinancialOffer");
      } else {
        setMessage(response.data.message || "Signup failed");
      }
    } 
    
catch (error: unknown) {
  if (error instanceof Error) {
    setMessage(error.message);
  } else {
    setMessage("Signup failed");
  }
}

  };
  
  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      setMessage("Google Signup failed: No credential received.");
      return;
    }

    try {
      const response = await axios.post<{ token?: string }>(
        // "http://192.168.100.138:5000/google-auth", // 192.168.0.228
        "http://192.168.18.62:5000/google-auth",

        { token: credentialResponse.credential }
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        setMessage("Google Signup successful! Redirecting...");
        // router.push("/dashboard");
      }
    } 
    
    catch {
      setMessage("Google Signup failed");
    }
  };
  
return (
   
  <form onSubmit={handleSubmit} className="w-full max-w-md min-w-[320px] mx-auto my-12 bg-white p-8 rounded-lg shadow-md space-y-4">
  <h2 className="text-xl font-bold text-center  text-Red">Sign Up</h2>

  <div className="relative w-full">
    <input className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
      type="text" name="name" value={formData.name} onChange={handleChange} required
    />
   <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Name</label>
  </div>

  <div className="relative w-full">
    <input type="email" value={formData.email} onChange={handleChange}
      required className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
    />
    <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Email</label>
  </div>  

  <div className="relative w-full">
    <input className="peer w-[370px] border-Blue border-2 px-3 pt-5 pb-1 text-xs font-sans serif"
      type="password" name="password" value={formData.password} onChange={handleChange} required
    />
    <label className="absolute left-3 top-1 text-xs text-black font-medium font-sans serif">Password</label>
  </div>

  {message && <p className="text-center text-sm text-gray">{message}</p>}
  

  <div className="text-center">
    <button className="w-64 border-1 -mt-4 font-sans serif text-white bg-Red text-xs font-semibold py-2 rounded hover:bg-Red" 
     type="submit">
     Register Now          
    </button>
  </div>

<div className="mt-6 text-center">
  {/* Divider line */}
  <div className="flex items-center justify-center my-2">
    <hr className="w-1/4 border-gray"/>
    <span className="px-2 text-xs font-sans serif font-semibold text-gray">OR</span>
    <hr className="w-1/4 border-gray"/>
  </div>

  {/* Centered Login link */}
  <Link href="/login" className="text-sm font-sans serif text-Red hover:text-Blue font-bold">
    Login
  </Link>
</div>
  <GoogleLoginButton onSuccess={handleGoogleSuccess} onFailure={() => setMessage("Google authentication failed")}/>
  </form>
);};
export default Signup;