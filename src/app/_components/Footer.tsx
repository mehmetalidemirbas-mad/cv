import Link from "next/link";
import { IconArrowUp } from "./icons";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <Link className="brand" href="/">
          <span className="dot" />
          Ali Demirbaş <span className="copy">© 2026</span>
        </Link>
        <nav className="foot-nav" aria-label="Footer">
          <Link href="/about">About</Link>
          <span className="sep">·</span>
          <Link href="/content">Content</Link>
          <span className="sep">·</span>
          <a href="#top" className="totop">
            Back to top
            <IconArrowUp />
          </a>
        </nav>
      </div>
    </footer>
  );
}
