"use client";
import { useState } from "react";
import Link from "next/link";
import { User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useValidation } from "@/hooks/useValidationBox"; 

export default function LoginPage() {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const { validationResult, validateUsername } = useValidation(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateUsername(user);
    if (result.valid) {
      login("dummy-token");
    }
  };

  return (
    <div className="flex min-h-screen flex-col text-neutral-300">
      <header className="container p-6">
        <div className="w-8 h-8">
          <Link href="/">Back</Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2 text-start">
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Login
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Enter a username to continue.
            </p>
          </div>
          <div className="h-px bg-neutral-800" />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <label
                htmlFor="user"
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User2Icon className="h-4 w-4 text-neutral-500" />
                </div>
                <Input
                  id="user"
                  type="text"
                  placeholder="Enter your username"
                  className={`pl-10 bg-neutral-900 border ${
                    validationResult && !validationResult.valid
                      ? "border-red-500"
                      : "border-neutral-800"
                  } text-neutral-600 dark:text-neutral-400 bg-transparent`}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              {validationResult && !validationResult.valid && (
                <div className="text-red-500 text-sm mt-1 bg-red-100 dark:bg-red-900 p-2 rounded-md">
                 {validationResult.errors?.[0] || "Invalid username"}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white"
            >
              Login
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
