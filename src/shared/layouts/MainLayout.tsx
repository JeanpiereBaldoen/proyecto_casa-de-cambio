import { ReactNode } from "react";
import { Navbar } from "./Navbar";

type Props = { children?: ReactNode };

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">{children}</main>
    </div>
  );
};