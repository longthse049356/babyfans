"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    alt: "Sleeping Baby",
    delay: 0.1,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop",
    alt: "Smiling Baby",
    delay: 0.2,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop",
    alt: "Baby Feet",
    delay: 0.3,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
    alt: "Playing Baby",
    delay: 0.4,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=2000&auto=format&fit=crop",
    alt: "Baby Laughing",
    delay: 0.1,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    alt: "Baby Toys",
    delay: 0.2,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop",
    alt: "Baby Walk",
    delay: 0.3,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop",
    alt: "Baby Sleep",
    delay: 0.4,
  },
];

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="py-24 relative bg-stone-50 dark:bg-zinc-900/50"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-handwriting">
            Sweet Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handwriting">
            Capturing the little smiles, the tiny toes, and the precious
            memories we&apos;ll cherish forever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {photos.map((photo, index) => {
            // Random rotation between -6 and 6 degrees
            const rotation = index % 2 === 0 ? -3 : 3;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.2 },
                }}
                className="relative group max-w-[280px] w-full"
              >
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm rotate-[-2deg] shadow-sm z-20 pointer-events-none"></div>

                <Card className="overflow-hidden border-4 border-white bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-800 transform transition-all duration-300">
                  <CardContent className="p-3 pb-12">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="font-handwriting text-zinc-600 dark:text-zinc-300 font-medium text-xl">
                        {photo.alt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
