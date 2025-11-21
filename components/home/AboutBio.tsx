"use client";

import { motion } from "framer-motion";
import { Calendar, Heart, Ruler, Star, Weight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Calendar,
    label: "Born",
    value: "Oct 15, 2023",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    delay: 0.1,
  },
  {
    icon: Weight,
    label: "Weight",
    value: "3.5 kg",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300",
    delay: 0.2,
  },
  {
    icon: Ruler,
    label: "Height",
    value: "50 cm",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    delay: 0.3,
  },
  {
    icon: Star,
    label: "Zodiac",
    value: "Libra",
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
    delay: 0.4,
  },
];

export function AboutBio() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -z-10"></div>

      <div className="px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Badge
              variant="outline"
              className="px-6 py-2 text-base border-primary/50 text-primary bg-white/50 backdrop-blur-sm font-handwriting"
            >
              Hello World!
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Tiny Toes,{" "}
              <span className="text-primary font-handwriting">Big Dreams</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Hi there! I&apos;m the newest member of the family. I love milk,
              naps, and cuddling with my parents. Every day is a new adventure
              as I discover the world around me.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 max-w-4xl mx-auto">
            {stats.map((stat, _index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -5 }}
                className="h-full flex justify-center"
              >
                <Card className="border-none shadow-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm overflow-hidden group h-full w-full max-w-[180px]">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center h-full">
                    <div
                      className={`p-4 rounded-full ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-foreground font-handwriting mt-1 whitespace-nowrap">
                        {stat.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">
              &quot;
            </div>
            <blockquote className="text-2xl md:text-3xl font-handwriting text-foreground/80 relative z-10 px-8">
              Ten little fingers, ten perfect toes, fill our hearts with love
              that overflows.
            </blockquote>
            <div className="absolute -bottom-8 -right-4 text-6xl text-primary/20 font-serif rotate-180">
              &quot;
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-primary font-medium">
              <Heart className="w-4 h-4 fill-current" />
              <span>Mommy & Daddy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
