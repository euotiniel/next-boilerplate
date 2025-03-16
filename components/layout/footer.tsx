import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 md:px-20 border-t-[1px] border-dashed p-4 md:p-5 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <small className="text-sm text-muted-foreground">
          nextjs-boilerplate - 2025 Built by{" "}
          <Link
            href="https://x.com/euotiniel"
            className="border-b"
            target="_blank"
          >
            @euotiniel
          </Link>
        </small>
      </div>
      <div>
        <blockquote className="text-sm text-muted-foreground italic md:text-right">
          Do you want a next project? Start here.{" "}
        </blockquote>
      </div>
    </footer>
  );
}
