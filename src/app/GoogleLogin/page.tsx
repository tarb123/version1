"use client";
import React from "react";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface GoogleLoginButtonProps {
  onSuccess: (credentialResponse: CredentialResponse) => Promise<void>;
  onFailure: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess, onFailure }) => {
  const router = useRouter();

  const handleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) {
      console.error("No credential found in response");
      return;
    }

    try {
      const decoded: { name: string; email: string; sub: string } = jwtDecode(response.credential);
      console.log("Google User:", decoded);

      const res = await fetch("http://192.168.18.62:5000/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          googleId: decoded.sub,
        }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error(`Invalid JSON Response: ${text}`);
      }

      console.log("Server Response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("../../"); // Next.js navigation
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error: any) {
      console.error("Login Error:", error.message);
    }

    onSuccess(response); // Call parent success handler
  };

  const handleFailure = () => {
    console.error("Google Login Failed");
    onFailure();
  };

  return (
    <GoogleOAuthProvider clientId="635546059677-fjd1smc038ev74b6h16gp2nvv6qm2e4r.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;