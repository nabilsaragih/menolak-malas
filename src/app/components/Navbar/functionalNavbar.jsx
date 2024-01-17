'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const FunctionalNavbar = ({ id, title, className }) => {
  const pathname = usePathname();

  const scroll = () => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  if (pathname === '/') {
    if (id === '/blogs') {
      return (
        <Link href={id} className={className}>{title}</Link>
      )
    } else {
      return (
        <a onClick={scroll} className={className} style={{ cursor: 'pointer' }}>{title}</a>
      )
    };
  } else {
    if (id === '/blogs') {
      return (
        <Link href={id} className={className}>{title}</Link>
      )
    } else {
      return (
        <Link href='/' className={className}>{title}</Link>
      )
    };
  };

};

export default FunctionalNavbar;