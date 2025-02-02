"use client";

import Link from "next/link";
import {
  UserIcon,
  HomeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

import SignOutButton from "@/app/_components/SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="size-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="size-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="size-5 text-primary-600" />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 ${pathname === link.href ? "bg-primary-900 text-primary-100" : ""}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
