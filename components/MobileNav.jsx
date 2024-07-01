"use client";

import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Início",
  },
  {
    href: "/about",
    name: "Sobre",
  },
  {
    href: "/works",
    name: "Trabalhos",
  },
  {
    href: "/contact",
    name: "Contatos",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-black text-xl">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase max-w-max mx-auto`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <Socials containerStyles="text-black text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
