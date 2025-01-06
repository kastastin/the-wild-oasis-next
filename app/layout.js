import { Josefin_Sans } from "next/font/google";

import Header from "@/app/_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";

import "@/app/_styles/globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  desciption:
    "The Wild Oasis is a place to relax and enjoy nature. Luxurious cabins, beautiful landscapes, and a variety of activities await you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body className="relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased">
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
