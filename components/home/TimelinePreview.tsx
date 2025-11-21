"use client";

import { motion } from "framer-motion";
import { Baby, Footprints, Smile } from "lucide-react";

const milestones = [
  {
    id: 1,
    title: "Hello World",
    date: "Oct 15, 2023",
    description: "Arrived safely at 3:45 AM",
    icon: Baby,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "First Smile",
    date: "Nov 20, 2023",
    description: "Smiled at mommy for the first time",
    icon: Smile,
    color: "text-yellow-500",
  },
  {
    id: 3,
    title: "First Steps",
    date: "Coming Soon",
    description: "Practicing every day!",
    icon: Footprints,
    color: "text-green-500",
  },
];

export function TimelinePreview() {
  return (
    <section id="milestones" className="py-20 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-handwriting">
            My Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watching me grow, one milestone at a time.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`bg-card p-6 rounded-xl shadow-sm border border-border ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-bold text-secondary-foreground mb-2">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary shadow-lg">
                  <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
