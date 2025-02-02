import Link from "next/link";
import Image from "next/image";

import bgImg from "@/public/bg.png";

export default function Page() {
  return (
    <div className="absolute inset-0">
      <Image
        src={bgImg}
        alt="Mountains and forests with two cabins"
        fill
        placeholder="blur"
        quality={80}
        className="object-fit object-top"
      />

      <div className="relative z-10 mt-56 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
