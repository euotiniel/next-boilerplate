import Link from "next/link";
import Layout from "@/components/layout";
import { FlaskConical } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <main className="h-screen flex flex-col items-center justify-center">
        <Link href="https://github.com/euotiniel/validation-box" target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-neutral-900 rounded-full opacity-40 cursor-pointer mb-4">
          <FlaskConical className="w-4 h-4" /> <span> Test our validation library with regex flexive</span>
        </Link>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          nextjs-boilerplate
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Do you want a next project? Start here.{" "}
        </p>
        <div>
          <a
            href="https://github.com/euotiniel/nextjs-boilerplate"
            className="font-medium text-sm px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-black/50 rounded-full duration-300"
            target="_blank"
          >
            Visit on GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </main>
    </Layout>
  );
}
