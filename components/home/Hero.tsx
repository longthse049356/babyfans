"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 dark:bg-white/10 backdrop-blur-sm border border-primary/20 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Xin chào! Tôi đã đến đây.
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Chào mừng đến với Thế giới của
            <br />
            <span className="text-primary">Đậu Nhỏ</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
            Cùng chúng tôi ghi lại những khoảnh khắc nhỏ, những cột mốc lớn và
            tất cả những điều ở giữa.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full px-8 text-lg h-12 group">
              Gửi lời chúc
              <Heart className="ml-2 h-5 w-5 group-hover:fill-current transition-all" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-lg h-12"
            >
              Xem thư viện
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
            {/* Decorative blobs */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl opacity-70"></div>

            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-card/50 dark:border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <Image
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop"
                alt="Cute Baby"
                fill
                sizes="(max-width: 768px) 300px, 500px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
