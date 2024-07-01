import Link from "next/link";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <FaWhatsapp />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
