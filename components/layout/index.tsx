import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}