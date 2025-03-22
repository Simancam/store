"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface HoodieCardProps {
  name: string
  price: number
  image1: string
  image2: string
}

export function HoodieCard({ name, price, image1, image2 }: HoodieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden">
      <motion.div
        className="relative aspect-square overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isHovered ? "image2" : "image1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full"
          >
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              className="relative w-full h-full"
            >
              <Image
                src={isHovered ? image2 : image1}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full" variant="outline">
          Buy Now
        </Button>
      </div>
    </div>
  )
}