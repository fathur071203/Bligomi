"use client";

import Lenis from "lenis";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import type { Photo as PhotoData } from "@/content/images";

// Satu kurva dan rentang durasi untuk seluruh situs, supaya geraknya terasa satu keluarga.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const lenisStore: { current: Lenis | null } = { current: null };

/** Gulir halus + penghormatan pada setelan "kurangi gerak" pengguna. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -72 }, autoRaf: true });
    lenisStore.current = lenis;
    return () => {
      lenis.destroy();
      lenisStore.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    lenisStore.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Muncul halus sambil naik sedikit. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  immediate?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -8% 0px" } })}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Judul yang naik kata demi kata dari balik topeng. */
export function SplitText({
  text,
  as = "h2",
  className,
  delay = 0,
  id,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag ref={ref} id={id} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden>
          <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "108%" }}
              animate={inView ? { y: "0%" } : undefined}
              transition={{ duration: 0.8, ease: EASE, delay: delay + i * 0.035 }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}

/** Foto yang terbuka dari bawah, mengendap dari sedikit diperbesar, dengan paralaks ringan. */
export function PhotoReveal({
  photo,
  className = "",
  sizes = "100vw",
  priority = false,
  note = false,
  delay = 0,
}: {
  photo: PhotoData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  note?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-md ${className}`}>
      <motion.div
        className="absolute inset-0 bg-mist"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[6%]">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={inView ? { scale: 1 } : undefined}
            transition={{ duration: 1.5, ease: EASE, delay }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              priority={priority}
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        {note ? (
          <span className="absolute bottom-2.5 right-2.5 rounded bg-black/55 px-2 py-0.5 text-[0.7rem] font-medium text-white/90">
            Foto ilustrasi
          </span>
        ) : null}
      </motion.div>
    </div>
  );
}

/** Angka yang menghitung naik saat terlihat. Tanpa JavaScript, nilai akhir tetap tampil. */
export function CountUp({ to, from = 0, duration = 1.6 }: { to: number; from?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!reduced && ref.current) ref.current.textContent = String(from);
  }, [from, reduced]);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(from, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {to}
    </span>
  );
}

/** Garis tipis yang tergambar dari kiri ke kanan. */
export function Line({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className={`block origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    />
  );
}

/** Garis kemajuan baca di tepi atas layar (halaman artikel). */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });
  return (
    <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-brand" />
  );
}
