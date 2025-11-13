"use client";
import React from "react";
import GoogleLoginButton from "../components/GoogleLoginButton"; 
import { CredentialResponse } from "@react-oauth/google";

const GoogleLoginPage: React.FC = () => {
  
  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    console.log("Google login success:", credentialResponse);
  };

  const handleGoogleFailure = () => {
    console.error("Google login failed");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <GoogleLoginButton onSuccess={handleGoogleSuccess} onFailure={handleGoogleFailure}/>
    </div>
  );};
export default GoogleLoginPage;