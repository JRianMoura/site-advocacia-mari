import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container mx-auto flex gap-8 ">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
