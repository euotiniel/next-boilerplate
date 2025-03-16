"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { logout } = useAuth();

  return (
    <main className="h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-start">
          <h1 className="text-2xl font-semibold text-black dark:text-white">
            Welcome to Dashboard
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Now you're logged in, what are you going to do?
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Of course you can't go to the{" "}
            <Link href="/" className="border-b">
              home
            </Link>{" "}
            or{" "}
            <Link href="/auth/login" className="border-b">
              login
            </Link>{" "}
            screen right now.
          </p>
        </div>
        <div className="h-px bg-neutral-800" />
        <Button onClick={logout} type="submit" className="w-full">
          Log out
        </Button>
      </div>
    </main>
  );
}
