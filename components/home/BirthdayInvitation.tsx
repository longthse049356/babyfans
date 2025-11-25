"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Gift,
  Heart,
  MapPin,
  Music,
  Sparkles,
  VolumeX,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Confetti particle component
const Confetti = ({
  delay,
  randomValues,
}: {
  delay: number;
  randomValues: {
    color: string;
    x: number;
    rotation: number;
    size: number;
    duration: number;
    borderRadius: string;
  };
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${randomValues.x}%`,
        top: "-20px",
        width: randomValues.size,
        height: randomValues.size,
        backgroundColor: randomValues.color,
        borderRadius: randomValues.borderRadius,
      }}
      initial={{ y: -20, rotate: 0, opacity: 1 }}
      animate={{
        y: "100vh",
        rotate: randomValues.rotation + 720,
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: randomValues.duration,
        delay,
        ease: "linear",
      }}
    />
  );
};

// Balloon component
const Balloon = ({
  color,
  delay,
  startX,
}: {
  color: string;
  delay: number;
  startX: number;
}) => {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{ left: `${startX}%` }}
      initial={{ y: "100vh", scale: 0 }}
      animate={{
        y: [null, "-120vh"],
        scale: [0, 1, 1],
        x: [0, Math.sin(startX) * 50, Math.sin(startX) * -30, 0],
      }}
      transition={{
        duration: 8,
        delay,
        ease: "easeOut",
        x: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <svg width="50" height="70" viewBox="0 0 50 70">
        <defs>
          <radialGradient id={`balloon-${color}-${startX}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
          <linearGradient
            id={`balloon-highlight-${color}-${startX}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Main balloon body - more rounded */}
        <ellipse
          cx="25"
          cy="24"
          rx="20"
          ry="24"
          fill={`url(#balloon-${color}-${startX})`}
        />
        {/* Highlight/shine effect */}
        <ellipse
          cx="20"
          cy="18"
          rx="8"
          ry="10"
          fill={`url(#balloon-highlight-${color}-${startX})`}
        />
        {/* Balloon knot at the top */}
        <circle cx="25" cy="3" r="2.5" fill={color} />
        <circle cx="25" cy="3" r="1.5" fill="rgba(0,0,0,0.2)" />
        {/* String connection from knot to balloon */}
        <line
          x1="25"
          y1="5.5"
          x2="25"
          y2="0"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Bottom tie/knot */}
        <polygon points="25,48 22,52 28,52" fill={color} />
        {/* String from balloon to bottom */}
        <path
          d="M25,52 Q30,60 25,70"
          stroke="#888"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

// Sparkle component
const Sparkle = ({
  delay,
  x,
  y,
  repeatDelay,
}: {
  delay: number;
  x: number;
  y: number;
  repeatDelay: number;
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay,
      }}
    >
      <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
    </motion.div>
  );
};

// Firework burst component
const Firework = ({
  x,
  y,
  delay,
  color,
  distances,
}: {
  x: number;
  y: number;
  delay: number;
  color: string;
  distances: number[];
}) => {
  const particles = Array.from({ length: 12 });

  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {particles.map((_, i) => {
        const angle = (i / 12) * 360;
        const rad = (angle * Math.PI) / 180;
        const distance = distances[i];

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{
              x: Math.cos(rad) * distance,
              y: Math.sin(rad) * distance,
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Gift Box Component
const GiftBox = ({ onOpen }: { onOpen: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onClick={onOpen}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-xl opacity-50"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Gift box */}
      <motion.div
        className="relative w-40 h-40 md:w-56 md:h-56"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Box lid */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-44 md:w-64 h-12 md:h-16 z-10"
          animate={{
            rotateX: isHovered ? -20 : 0,
            y: isHovered ? -5 : 0,
          }}
          style={{ transformOrigin: "bottom center", perspective: 1000 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-red-400 to-red-500 rounded-t-xl shadow-lg relative">
            {/* Ribbon on lid */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 md:w-12 h-full bg-gradient-to-b from-yellow-300 to-yellow-400" />
            {/* Bow */}
            <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2">
              <div className="relative">
                <motion.div
                  className="absolute -left-6 md:-left-8 top-2 w-8 h-6 md:w-12 md:h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"
                  style={{ transform: "rotate(-30deg)" }}
                  animate={{ rotate: isHovered ? [-30, -35, -30] : -30 }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -right-6 md:-right-8 top-2 w-8 h-6 md:w-12 md:h-8 bg-gradient-to-bl from-yellow-300 to-yellow-500 rounded-full"
                  style={{ transform: "rotate(30deg)" }}
                  animate={{ rotate: isHovered ? [30, 35, 30] : 30 }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <div className="relative z-10 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Box body */}
        <div className="absolute bottom-0 left-0 w-40 h-32 md:w-56 md:h-44 bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-2xl">
          {/* Vertical ribbon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-8 md:w-12 h-full bg-gradient-to-b from-yellow-400 to-yellow-500" />
          {/* Horizontal ribbon */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-6 md:h-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
          {/* Shine effect */}
          <div className="absolute top-2 left-2 w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full blur-md" />
        </div>
      </motion.div>

      {/* Text */}
      <motion.p
        className="mt-6 text-lg md:text-xl font-handwriting text-primary text-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨ Nhấn để mở quà ✨
      </motion.p>
    </motion.div>
  );
};

// Main component
export function BirthdayInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const confettiCount = 80;
  const balloonColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFE66D",
    "#F38181",
    "#AA96DA",
    "#FCBAD3",
    "#95E1D3",
    "#A8D8EA",
  ];

  // Memoize random values to avoid calling Math.random during render
  const confettiColors = useMemo(
    () => [
      "#FF6B6B",
      "#4ECDC4",
      "#FFE66D",
      "#95E1D3",
      "#F38181",
      "#AA96DA",
      "#FCBAD3",
      "#A8D8EA",
    ],
    []
  );

  const confettiRandomValues = useMemo(
    () =>
      Array.from({ length: confettiCount }).map(() => ({
        color:
          confettiColors[Math.floor(Math.random() * confettiColors.length)],
        x: Math.random() * 100,
        rotation: Math.random() * 360,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 2 + 3,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      })),
    [confettiCount, confettiColors]
  );

  const starsRandomValues = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      })),
    []
  );

  const giftSparklesValues = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        x: 30 + Math.random() * 40,
        y: 20 + Math.random() * 60,
        repeatDelay: Math.random() * 2,
      })),
    []
  );

  const cardSparklesValues = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        repeatDelay: Math.random() * 2,
      })),
    []
  );

  const fireworkDistances = useMemo(
    () => ({
      firework1: Array.from({ length: 12 }).map(() => 80 + Math.random() * 40),
      firework2: Array.from({ length: 12 }).map(() => 80 + Math.random() * 40),
      firework3: Array.from({ length: 12 }).map(() => 80 + Math.random() * 40),
      firework4: Array.from({ length: 12 }).map(() => 80 + Math.random() * 40),
      firework5: Array.from({ length: 12 }).map(() => 80 + Math.random() * 40),
    }),
    []
  );

  // Check if a gift was already opened in this session
  useEffect(() => {
    const opened = sessionStorage.getItem("giftOpened");
    if (opened) {
      setGiftOpened(true);
    } else {
      // Auto open modal after 1 second on the first visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenGift = useCallback(() => {
    setShowInvitation(true);
    sessionStorage.setItem("giftOpened", "true");
    setGiftOpened(true);

    // Play birthday music
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Audio autoplay blocked, user will need to click play
      });
      setIsPlaying(true);
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().then();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setShowInvitation(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  // Open the invitation button for returning visitors
  const openInvitation = useCallback(() => {
    setIsOpen(true);
    setShowInvitation(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  return (
    <>
      {/* Audio element - Birthday song */}
      {/* Add your birthday song to /public/audio/birthday-song.mp3 */}
      <audio
        ref={audioRef}
        src="/audio/birthday-song.mp3"
        loop
        preload="auto"
      />

      {/* Floating button to reopen invitation */}
      {giftOpened && !isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openInvitation}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg flex items-center justify-center text-white"
        >
          <Gift className="w-6 h-6 md:w-8 md:h-8" />
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      )}

      {/* Main Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20 md:pt-24 overflow-hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-pink-900/95 to-red-900/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={closeModal}
            />

            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {starsRandomValues.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {!showInvitation ? (
                /* Gift Box View */
                <motion.div
                  key="giftbox"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{
                    scale: 0,
                    rotate: 180,
                    transition: { duration: 0.5 },
                  }}
                  className="relative z-10 flex flex-col items-center"
                >
                  {/* Sparkles around gift */}
                  {giftSparklesValues.map((sparkle, i) => (
                    <Sparkle
                      key={i}
                      delay={i * 0.3}
                      x={sparkle.x}
                      y={sparkle.y}
                      repeatDelay={sparkle.repeatDelay}
                    />
                  ))}

                  <GiftBox onOpen={handleOpenGift} />

                  {/* Close button */}
                  <motion.button
                    className="absolute top-4 right-4 text-white/70 hover:text-white"
                    onClick={closeModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              ) : (
                /* Invitation Card View */
                <motion.div
                  key="invitation"
                  initial={{ scale: 0, y: 100 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0, y: -100 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="relative z-10 w-full max-w-sm md:max-w-md mx-auto max-h-[85vh] overflow-y-auto"
                >
                  {/* Confetti */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {confettiRandomValues.map((values, i) => (
                      <Confetti
                        key={i}
                        delay={i * 0.03}
                        randomValues={values}
                      />
                    ))}
                  </div>

                  {/* Balloons */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {balloonColors.map((color, i) => (
                      <Balloon
                        key={i}
                        color={color}
                        delay={0.5 + i * 0.3}
                        startX={5 + i * 12}
                      />
                    ))}
                  </div>

                  {/* Fireworks */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <Firework
                      x={20}
                      y={20}
                      delay={0.5}
                      color="#FFE66D"
                      distances={fireworkDistances.firework1}
                    />
                    <Firework
                      x={80}
                      y={15}
                      delay={1}
                      color="#FF6B6B"
                      distances={fireworkDistances.firework2}
                    />
                    <Firework
                      x={50}
                      y={10}
                      delay={1.5}
                      color="#4ECDC4"
                      distances={fireworkDistances.firework3}
                    />
                    <Firework
                      x={30}
                      y={30}
                      delay={2}
                      color="#AA96DA"
                      distances={fireworkDistances.firework4}
                    />
                    <Firework
                      x={70}
                      y={25}
                      delay={2.5}
                      color="#F38181"
                      distances={fireworkDistances.firework5}
                    />
                  </div>

                  {/* Invitation Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-white via-pink-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Decorative top border */}
                    <div className="h-2 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400" />

                    {/* Close & Music buttons */}
                    <div className="absolute top-5 right-4 flex gap-2 z-20">
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 hover:text-primary"
                        onClick={toggleMusic}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isPlaying ? (
                          <Music className="w-5 h-5" />
                        ) : (
                          <VolumeX className="w-5 h-5" />
                        )}
                      </motion.button>
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 hover:text-red-500"
                        onClick={closeModal}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Card content */}
                    <div className="p-4 md:p-6">
                      {/* Header */}
                      <motion.div
                        className="text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-block"
                        >
                          <span className="text-3xl md:text-4xl">🎂</span>
                        </motion.div>
                        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-handwriting mt-1">
                          Thiệp Mời Sinh Nhật
                        </h2>
                      </motion.div>

                      {/* Baby photo */}
                      <motion.div
                        className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7, type: "spring" }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 animate-spin-slow" />
                        <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
                          <Image
                            src="/images/baby/IMG_1425.jpg"
                            alt="Đậu Nhỏ"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Decorative hearts */}
                        <motion.div
                          className="absolute -top-2 -right-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-1 -left-2"
                          animate={{ scale: [1.2, 1, 1.2] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                        </motion.div>
                      </motion.div>

                      {/* Baby name */}
                      <motion.div
                        className="text-center mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-handwriting">
                          Đậu Nhỏ
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Mời bạn đến dự tiệc sinh nhật của bé
                        </p>
                      </motion.div>

                      {/* Party details */}
                      <motion.div
                        className="space-y-2 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <div className="flex items-center gap-3 p-2.5 bg-white/60 rounded-xl">
                          <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                            <Calendar className="w-4 h-4 text-pink-500" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Ngày</p>
                            <p className="font-semibold text-gray-800 text-sm">
                              Chủ nhật, 02/02/2026
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-white/60 rounded-xl">
                          <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Thời gian</p>
                            <p className="font-semibold text-gray-800 text-sm">
                              10:00 - 14:00
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-white/60 rounded-xl">
                          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Địa điểm</p>
                            <p className="font-semibold text-gray-800 text-sm">
                              123 Đường ABC, Quận XYZ
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        className="text-center p-3 bg-gradient-to-r from-pink-100 via-white to-yellow-100 rounded-xl mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                      >
                        <p className="text-gray-700 italic font-handwriting text-base">
                          &quot;Sự hiện diện của bạn là món quà lớn nhất cho bé!
                          ❤️&quot;
                        </p>
                      </motion.div>

                      {/* RSVP Button */}
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <Button
                          size="default"
                          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-semibold px-6 py-5 rounded-full shadow-lg transform hover:scale-105 transition-transform"
                          onClick={() => window.open("/guestbook", "_self")}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          Gửi lời chúc
                        </Button>
                      </motion.div>
                    </div>

                    {/* Decorative bottom */}
                    <div className="h-2 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400" />
                  </motion.div>

                  {/* More sparkles around the card */}
                  {cardSparklesValues.map((sparkle, i) => (
                    <Sparkle
                      key={`card-sparkle-${i}`}
                      delay={1 + i * 0.2}
                      x={sparkle.x}
                      y={sparkle.y}
                      repeatDelay={sparkle.repeatDelay}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
