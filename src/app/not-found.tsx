import Link from "next/link";
import { IconArrowRight } from "./_components/icons";

export default function NotFound() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <h1 data-reveal>Page not found.</h1>
          <p className="ph-sub" data-reveal>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          </p>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <Link className="btn btn--primary" href="/">
            Back home
            <IconArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
