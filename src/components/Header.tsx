"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { contactLink, nav, site } from "@/content/site";
import { lenisStore } from "./motion";

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Menjadi solid setelah digulir; menyingkir saat gulir turun, kembali saat gulir naik.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current && y > 400);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) lenisStore.current?.stop();
    else lenisStore.current?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Di puncak halaman, header menumpang di atas kepala halaman yang gelap.
  const solid = scrolled || open;
  // Tautan ke bagian di halaman yang sama tidak mengubah pathname, jadi menu ditutup saat diklik.
  const close = () => setOpen(false);
  const step = (i: number) => ({ "--d": `${open ? 80 + i * 55 : 0}ms` }) as CSSProperties;
  const stepClass = `transition-[opacity,transform] delay-[var(--d)] duration-500 ease-out ${
    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color,color] duration-500 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        open
          ? "border-line bg-white text-ink"
          : solid
            ? "border-line bg-white/85 text-ink backdrop-blur-md"
            : "border-white/15 bg-transparent text-white"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-8">
        <Link
          href="/"
          className="text-[1.45rem] font-semibold tracking-[-0.04em]"
          aria-label={`${site.name} — beranda`}
        >
          bligomi
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem] font-medium">
            {nav.map((item, i) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="nav-link"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 10 6"
                    className="h-1.5 w-2.5 opacity-70 transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden
                  >
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <ul
                  className={`invisible absolute top-full w-80 translate-y-2 rounded-md border border-line bg-white p-2 text-ink opacity-0 shadow-xl shadow-black/[0.07] transition-[opacity,transform,visibility] duration-300 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    i === nav.length - 1 ? "right-0" : "-left-4"
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="group/item flex items-center justify-between gap-4 rounded px-3.5 py-3 transition-colors duration-200 hover:bg-mist"
                      >
                        <span>
                          <span className="block text-[0.95rem] font-semibold transition-colors duration-200 group-hover/item:text-brand">
                            {child.label}
                          </span>
                          <span className="mt-0.5 block text-[0.82rem] font-normal leading-snug text-muted">
                            {child.desc}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="-translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link
                href={contactLink.href}
                className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  solid ? "bg-brand text-white hover:bg-brand-dark" : "bg-white text-forest hover:bg-mist"
                }`}
              >
                {contactLink.label}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-seluler"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
        >
          <span className="relative block h-3.5 w-6" aria-hidden>
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-500 ease-out ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-500 ease-out ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu seluler: panel memudar masuk, butirnya menyusul satu per satu. */}
      <div
        id="menu-seluler"
        inert={!open}
        data-lenis-prevent
        className={`absolute inset-x-0 top-full h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-white text-ink transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navigasi seluler" className="wrap flex min-h-full flex-col py-4">
          <ul className="divide-y divide-line">
            <li style={step(0)} className={`py-4 ${stepClass}`}>
              <Link
                href="/"
                onClick={close}
                aria-current={pathname === "/" ? "page" : undefined}
                className="block text-xl font-semibold tracking-tight aria-[current=page]:text-brand"
              >
                Beranda
              </Link>
            </li>
            {nav.map((item, i) => (
              <li key={item.href} style={step(i + 1)} className={`py-4 ${stepClass}`}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block text-xl font-semibold tracking-tight aria-[current=page]:text-brand"
                >
                  {item.label}
                </Link>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 border-l border-line pl-4 text-[0.95rem] text-muted">
                  {item.children.slice(1).map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={close} className="hover:text-brand">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div style={step(nav.length + 1)} className={`mt-6 ${stepClass}`}>
            <Link href={contactLink.href} onClick={close} className="btn btn--primary w-full">
              {contactLink.label}
            </Link>
          </div>

          <address className="mt-auto pt-8 text-sm not-italic leading-relaxed text-muted">
            <strong className="font-semibold text-ink">{site.legalName}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.region} — {site.address.country}
          </address>
        </nav>
      </div>
    </header>
  );
}
