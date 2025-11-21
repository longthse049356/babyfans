import { AboutBio } from "@/components/home/AboutBio";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { TimelinePreview } from "@/components/home/TimelinePreview";
import { BackgroundAnimation } from "@/components/layout/BackgroundAnimation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Hero />
        <AboutBio />
        <GalleryPreview />
        <TimelinePreview />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} BabyFans. Made with love.</p>
      </footer>
    </div>
  );
}
