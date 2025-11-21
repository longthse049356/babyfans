"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Heart, Moon, Smile, Star, Sun } from "lucide-react";

const icons = [
  { Icon: Heart, color: "text-pink-300" },
  { Icon: Star, color: "text-yellow-300" },
  { Icon: Cloud, color: "text-blue-300" },
  { Icon: Moon, color: "text-indigo-300" },
  { Icon: Sun, color: "text-orange-300" },
  { Icon: Smile, color: "text-green-300" },
];

// Generate items outside a component to avoid re-renders
const generateItems = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    const IconData = icons[i % icons.length];
    return {
      id: i,
      Icon: IconData.Icon,
      color: IconData.color,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
      scale: 0.5 + Math.random(),
    };
  });
};

export function BackgroundAnimation() {
  const [items] = useState(generateItems);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-br from-blue-50/50 via-white/50 to-pink-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.color} opacity-30 dark:opacity-20`}
          style={{
            left: item.left,
            top: item.top,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            rotate: [0, 360],
            scale: [item.scale, item.scale * 1.2, item.scale],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          <item.Icon size={40 * item.scale} />
        </motion.div>
      ))}
    </div>
  );
}
