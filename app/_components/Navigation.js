import Link from "next/link";

import { auth } from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex items-center gap-4 transition-colors hover:text-accent-400"
          >
            {session?.user?.image && (
              <div className="relative size-8">
                <Image
                  src={session.user.image}
                  alt={session.user.image}
                  fill
                  sizes="50vw"
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
