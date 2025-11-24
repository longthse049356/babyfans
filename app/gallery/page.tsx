"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// List of baby photos from public/images/baby
const babyPhotos = [
  {
    id: 1,
    src: "/images/baby/IMG_1425.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 2,
    src: "/images/baby/IMG_1426.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 3,
    src: "/images/baby/IMG_1427.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 4,
    src: "/images/baby/IMG_1428.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 5,
    src: "/images/baby/IMG_1429.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 6,
    src: "/images/baby/IMG_1430.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 7,
    src: "/images/baby/IMG_1431.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 8,
    src: "/images/baby/IMG_1432.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 9,
    src: "/images/baby/IMG_1454.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 10,
    src: "/images/baby/IMG_1469.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 11,
    src: "/images/baby/IMG_1505.JPG",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 12,
    src: "/images/baby/IMG_1585.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
  {
    id: 13,
    src: "/images/baby/IMG_1638.jpg",
    alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
  },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof babyPhotos)[0] | null
  >(null);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-handwriting">
            Thư viện ảnh của Đậu Nhỏ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ghi lại những khoảnh khắc đáng yêu, những nụ cười nhỏ và những kỷ
            niệm quý giá
          </p>
        </div>

        {/* Gallery Grid - Unsplash Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {babyPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover - Unsplash style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">Đậu Nhỏ</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Download functionality
                        const link = document.createElement("a");
                        link.href = photo.src;
                        link.download =
                          photo.src.split("/").pop() || "photo.jpg";
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal - Unsplash style */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-6xl w-full p-0 gap-0">
          {selectedPhoto && (
            <>
              <div className="relative aspect-video w-full max-h-[80vh] overflow-hidden">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <DialogHeader className="p-6">
                <DialogTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary fill-current" />
                  Đậu Nhỏ
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedPhoto.alt}
                </DialogDescription>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = selectedPhoto.src;
                      link.download =
                        selectedPhoto.src.split("/").pop() || "photo.jpg";
                      link.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Tải xuống
                  </Button>
                </div>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
