const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <path
        d="M3 10.5 12 3l9 7.5M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Content",
    href: "#content",
    icon: (
      <path
        d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM15 4v4h4M8 13h8M8 17h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Stack",
    href: "#stack",
    icon: (
      <path
        d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <path
        d="M21 4 3 11l7 2 2 7 9-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      {children}
    </svg>
  );
}

function Avatar() {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-semibold text-white">
      AD
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Desktop sidebar navigation */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-zinc-200 px-4 py-8 md:flex dark:border-zinc-800">
        <div className="flex items-center gap-3 px-2">
          <Avatar />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Ali Demirbaş</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Growth Marketer
            </p>
          </div>
        </div>
        <nav className="mt-10 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              <NavIcon>{item.icon}</NavIcon>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-60">
        {/* Mobile header */}
        <header className="flex items-center gap-3 px-6 py-5 md:hidden">
          <Avatar />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Ali Demirbaş</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Growth Marketer
            </p>
          </div>
        </header>

        <main
          id="home"
          className="flex flex-1 flex-col justify-center px-6 pb-28 pt-4 md:px-16 md:pb-16 md:pt-16"
        >
          <div className="w-full max-w-2xl">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Hi, This is Ali Demirbaş<span className="text-orange-500">.</span>
              <span className="ml-0.5 inline-block w-[3px] translate-y-1 self-stretch bg-orange-500 align-middle text-transparent select-none md:w-1">
                |
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-500 md:text-xl dark:text-zinc-400">
              Discover my vision as a Growth Marketer with expertise in{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                scaling digital products and establishing data-driven growth
                strategies.
              </span>
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#about"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                About
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-zinc-200 bg-white/90 px-2 py-2 backdrop-blur md:hidden dark:border-zinc-800 dark:bg-zinc-950/90">
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-1 text-[11px] font-medium ${
              i === 0
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-400 dark:text-zinc-500"
            }`}
          >
            <NavIcon>{item.icon}</NavIcon>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
