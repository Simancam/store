"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CircularText from "@/components/ui/circular-text";

export function Banner() {
  const handleShopClick = () => {
    document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src="/banner.gif" alt="Banner" fill style={{ objectFit: "cover" }} priority unoptimized />

      <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
        <CircularText
          text="VINILOS*PEPE*"
          onHover="speedUp"
          spinDuration={20}
          className="w-20 h-20"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-100 text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Streetwear
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Elevate Your Style
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          <Button onClick={handleShopClick} size="lg" variant="outline">
            Shop Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}