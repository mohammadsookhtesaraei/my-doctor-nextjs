"use client";

// next
import { usePathname } from "next/navigation";

// components
import Container from "@/components/container/Container";

// types
import { LinkHeaderT } from "@/types/header.types";
import Link from "next/link";

// all my links in header
const link: LinkHeaderT[] = [
  { name: "خانه", href: "/" },
  { name: "جستوجو", href: "/search" },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header>
      <Container>
        <div className="flex items-center py-4">
          <nav>
            <ul className="flex gap-x-8">
              {link.map((link: LinkHeaderT) => {
                const isActive =
                  pathName === link.href ||
                  (pathName.startsWith(link.href) && link.href !== "/");
                return (
                  <li key={link.name}>
                    <Link
                      className={isActive ? "text-green-500" : "text-white"}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className="ms-auto cursor-pointer rounded-xl border border-green-500 bg-transparent px-4 py-2 font-bold text-green-500 hover:bg-green-500 hover:text-gray-50">
            ورود|ثبت‌نام
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
