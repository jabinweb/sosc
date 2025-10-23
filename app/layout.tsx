import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalCTA from "../components/GlobalCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "School of Social Change - Transforming Education for a Better Tomorrow",
  description: "SOSC addresses education mortality through innovative teacher training, counselling services, and policy research. Join our mission to revolutionize learning in India.",
  keywords: "education, social change, teacher training, counselling, policy research, India, SOSC",
  icons: {
    icon: '/logos/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <GlobalCTA />
        <Footer />
      </body>
    </html>
  );
}
