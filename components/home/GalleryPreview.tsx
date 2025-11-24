"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    alt: "Em bé đang ngủ",
    delay: 0.1,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop",
    alt: "Em bé đang cười",
    delay: 0.2,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop",
    alt: "Bàn chân em bé",
    delay: 0.3,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
    alt: "Em bé đang chơi",
    delay: 0.4,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=2000&auto=format&fit=crop",
    alt: "Em bé đang cười",
    delay: 0.1,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    alt: "Đồ chơi của bé",
    delay: 0.2,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop",
    alt: "Em bé tập đi",
    delay: 0.3,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop",
    alt: "Em bé ngủ",
    delay: 0.4,
  },
];

export function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -z-10"></div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] pointer-events-none -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-handwriting">
            Khoảnh khắc ngọt ngào
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-handwriting">
            Ghi lại những nụ cười nhỏ, những ngón chân nhỏ xinh và những kỷ niệm
            quý giá mà chúng ta sẽ trân trọng mãi mãi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center max-w-7xl mx-auto">
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/80 dark:bg-primary/20 backdrop-blur-sm rotate-[-2deg] shadow-sm z-20 pointer-events-none border border-border/30 dark:border-primary/30 rounded-sm"></div>

                <Card className="overflow-hidden border-2 border-border bg-card shadow-lg hover:shadow-2xl transform transition-all duration-300 group-hover:border-primary/50">
                  <CardContent className="p-4 pb-14 relative">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                      {/* Image Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                      <p className="font-handwriting text-foreground/90 font-medium text-lg group-hover:text-foreground transition-colors">
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
