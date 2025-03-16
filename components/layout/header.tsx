import Link from "next/link";
import Toggle from "@/components/toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-4 md:px-14 py-2 md:border-b-[1px] border-dashed bg-[rgba(255, 255, 255, 0.849)] backdrop-blur-md z-50">
      <div className="mb-2 md:mb-0 md:mr-2">
        <nav className="flex items-center gap-12">
        <h4 className="scroll-m-20 font-bold tracking-tight select-none">
          nextjs-boilerplate
        </h4>
        <ul className="flex items-center gap-6">
            <li><Link href="/dashboard">Dasboard</Link></li>
            <li><Link href="https://github.com/euotiniel/next-boilerplate">Source</Link></li>
            <li><Link href="#!" className="opacity-20">|</Link></li>
            <li><Link href="/auth/login">Login</Link></li>
        </ul>
        </nav>
      </div>
      <div className="flex flex-row md:gap-2 items-center">
        <Toggle />
      </div>
    </header>
  );
}