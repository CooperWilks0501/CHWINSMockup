import type { ReactNode } from "react";
import { Header } from "./Header";
import { SubNav } from "./SubNav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SubNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
