import Image from "next/image";
import Link from "next/link";

const Copyright = async () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <h1 className="pr-4 font-bold text-xl">Nabil Saragih</h1>
      <p className="pl-4 font-thin text-sm">&copy; {year} Nabil Saragih. All Rights Reserved.</p>
    </>
  );
};

const Contact = ({ link, iconPath }) => {
  return (
    <>
      <div>
        <Link href={link} target="_blank">
          <Image src={`/${iconPath}`} width={28} height={28} className="ml-7" />
        </Link>
      </div>
    </>
  )
}

const Footer = {
  Copyright,
  Contact,
}

export default Footer;
