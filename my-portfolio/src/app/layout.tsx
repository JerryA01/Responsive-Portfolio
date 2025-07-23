import "./globals.css";
import Layout from "./components/layout";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // full italic + normal support
  display: "swap",
});

export const metadata = {
  title: "Jerry Arthur;s Personal Portfolio",
  description: "This is my personal portfolio where i showcase the project's I've done and currently working",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <Layout>{children}</Layout> {/* <- this wraps all pages in the Vanta background */}
      </body>
    </html>
  );
}
