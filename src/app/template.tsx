"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Transisi antarhalaman: konten memudar masuk dengan tenang. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
