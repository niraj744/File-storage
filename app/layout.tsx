import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Wrapper from "@/lib/Providers/Wrapper";
import { Toaster } from "@/components/ui/toaster";
import Auth from "@/lib/Providers/Auth";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Auth>
      <html lang="en">
        <body className={roboto.className}>
          <Wrapper>
            <main>{children}</main>
          </Wrapper>
          <Toaster />
        </body>
      </html>
    </Auth>
  );
}
