import { Geist, Geist_Mono } from "next/font/google";
import Form from "@/components/Formarchi";
import Login from "@/components/Login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Login></Login>
      {/* <Form></Form> */}
    </>
  );
}
