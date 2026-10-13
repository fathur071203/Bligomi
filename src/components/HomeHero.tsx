"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/content/company";
import { photos } from "@/content/images";
import { site } from "@/content/site";
import { EASE, Reveal, SplitText } from "./motion";
import { Arrow } from "./ui";

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Saat digulir: foto bergerak lebih lambat dari halaman, teks memudar perlahan.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-forest text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-20">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <Image
            src={photos.heroTerasering.src}
            alt={photos.heroTerasering.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-[50%_60%]"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(7_29_18/0.94)_0%,rgb(7_29_18/0.6)_45%,rgb(7_29_18/0.4)_100%)]" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="wrap pb-16 pt-40 md:pb-20">
        <Reveal immediate delay={0.1} y={10}>
          <p className="eyebrow flex items-center gap-3 text-white/80">
            <motion.span
              aria-hidden
              className="block h-px w-10 origin-left bg-white/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            />
            {site.legalName}
          </p>
        </Reveal>
        <SplitText as="h1" text={site.tagline} delay={0.25} className="h1 mt-5 max-w-4xl" />
        <Reveal immediate delay={0.65}>
          <p className="lead mt-6 max-w-2xl text-white/85">{profile.short}</p>
        </Reveal>
        <Reveal immediate delay={0.8} className="mt-9 flex flex-wrap gap-3">
          <Link href="/tentang-kami/profil-perusahaan" className="btn btn--light">
            Profil Perusahaan
            <Arrow />
          </Link>
          <Link href="/keberlanjutan" className="btn btn--outline-light">
            Keberlanjutan
          </Link>
        </Reveal>
      </motion.div>
    </section>
  );
}
