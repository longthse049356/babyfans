import { AboutBio } from "@/components/home/AboutBio";
import { BirthdayInvitation } from "@/components/home/BirthdayInvitation";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { TimelinePreview } from "@/components/home/TimelinePreview";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Birthday Invitation Modal */}
      <BirthdayInvitation />

      <div className="relative z-10">
        <Hero />
        <AboutBio />
        <GalleryPreview />
        <TimelinePreview />
      </div>

      <Footer />
    </div>
  );
}
