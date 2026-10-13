import Link from "next/link";
import { contactLink, nav, site } from "@/content/site";

export default function Footer() {
  const { phone, whatsapp, email } = site.contact;

  return (
    <footer className="bg-deep text-white">
      <div className="wrap grid gap-12 py-16 text-[0.95rem] sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href="/" className="text-2xl font-semibold tracking-[-0.04em]" aria-label={`${site.name} — beranda`}>
            bligomi
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed text-white/65">{site.tagline}.</p>
          <address className="mt-6 not-italic leading-relaxed text-white/65">
            <strong className="font-semibold text-white">{site.legalName}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.region} — {site.address.country}
          </address>
          {phone || whatsapp || email ? (
            <p className="mt-4 leading-relaxed text-white/65">
              {[phone, whatsapp].filter(Boolean).join(" · ")}
              {email ? (
                <>
                  <br />
                  <a href={`mailto:${email}`} className="underline-hover">
                    {email}
                  </a>
                </>
              ) : null}
            </p>
          ) : null}
          <Link href={contactLink.href} className="btn btn--outline-light mt-7">
            {contactLink.label}
          </Link>
        </div>

        {/* Kolom tautan mengikuti susunan menu utama. */}
        {nav.map((item, i) => (
          <nav
            key={item.href}
            aria-label={item.label}
            className={i === 0 ? "lg:col-span-3 lg:col-start-6" : i === 1 ? "lg:col-span-2" : "lg:col-span-2"}
          >
            <p className="text-sm font-semibold text-white">{item.label}</p>
            <ul className="mt-4 space-y-2.5 text-white/65">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="underline-hover hover:text-white">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Hak cipta dilindungi.
          </p>
          <p>
            Foto pada situs ini bersifat ilustrasi.{" "}
            <Link href="/kredit-foto" className="underline-hover text-white/70 hover:text-white">
              Kredit foto
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
