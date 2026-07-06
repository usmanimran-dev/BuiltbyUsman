"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundGlow() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.12] blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[60%] -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[100px]"
      />
    </div>
  );
}
