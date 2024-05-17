import { Gabarito } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/NavBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "RzAnimeList",
  description: "Website anime indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-secondary`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
