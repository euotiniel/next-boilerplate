"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(auth.isAuthenticated());
  }, []);

  const login = (token: string) => {
    auth.login(token);
    setIsAuthenticated(true);
    router.push("/dashboard");
  };

  const logout = () => {
    auth.logout();
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  return { isAuthenticated, login, logout };
}
