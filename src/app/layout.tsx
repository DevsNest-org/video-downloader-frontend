// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import RootLayout from "./rootlayout"; // Import the Client Component

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
