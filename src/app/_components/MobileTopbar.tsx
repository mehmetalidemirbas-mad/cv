import Image from "next/image";
import Link from "next/link";
import { IconSearch } from "./icons";

export default function MobileTopbar() {
  return (
    <header className="mtop">
      <Link className="mtop-profile" aria-label="Ali Demirbaş — home" href="/">
        <Image
          className="mtop-avatar"
          src="/foto.webp"
          alt="Ali Demirbaş"
          width={68}
          height={68}
        />
        <span className="sb-id">
          <span className="sb-name">Ali Demirbaş</span>
          <span className="sb-role">Growth Marketer</span>
        </span>
      </Link>
      <button className="mtop-search" type="button" aria-label="Search">
        <IconSearch />
      </button>
    </header>
  );
}
