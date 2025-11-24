"use client";

import { motion } from "framer-motion";
import { Baby, Calendar, Camera, Footprints, Heart, Smile } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    id: 1,
    title: "Chào thế giới",
    date: "2 Tháng 2, 2025",
    time: "12:55",
    description:
      "Đậu Nhỏ đã đến với thế giới này một cách an toàn và khỏe mạnh. Đây là khoảnh khắc thiêng liêng nhất trong cuộc đời của bố mẹ.",
    icon: Baby,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    status: "completed",
  },
  {
    id: 2,
    title: "Nụ cười đầu tiên",
    date: "2 Tháng 2, 2025",
    time: "Ngay sau khi sinh",
    description:
      "Lần đầu tiên Đậu Nhỏ cười với mẹ, một nụ cười ngọt ngào làm tan chảy trái tim của cả gia đình.",
    icon: Smile,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    status: "completed",
  },
  {
    id: 3,
    title: "Lần đầu tiên mở mắt",
    date: "2 Tháng 2, 2025",
    time: "Buổi chiều",
    description:
      "Đôi mắt trong veo của Đậu Nhỏ lần đầu tiên nhìn thấy ánh sáng, khám phá thế giới xung quanh.",
    icon: Camera,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    status: "completed",
  },
  {
    id: 4,
    title: "Lần đầu tiên bú mẹ",
    date: "2 Tháng 2, 2025",
    time: "Buổi tối",
    description:
      "Khoảnh khắc đầu tiên Đậu Nhỏ bú mẹ, một mối liên kết thiêng liêng giữa mẹ và con.",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    status: "completed",
  },
  {
    id: 5,
    title: "Những bước đi đầu tiên",
    date: "Sắp tới",
    time: "Đang chờ đợi",
    description:
      "Tập đi mỗi ngày! Chúng ta đang chờ đợi khoảnh khắc Đậu Nhỏ tự bước những bước đầu tiên.",
    icon: Footprints,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Lần đầu tiên nói",
    date: "Sắp tới",
    time: "Đang chờ đợi",
    description:
      "Chúng ta đang háo hức chờ đợi tiếng nói đầu tiên của Đậu Nhỏ, có thể là 'mẹ' hoặc 'bố'.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    status: "upcoming",
  },
];

export default function MilestonesPage() {
  const completedMilestones = milestones.filter(
    (m) => m.status === "completed"
  );
  const upcomingMilestones = milestones.filter((m) => m.status === "upcoming");

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="px-6 py-2 text-base border-primary/50 text-primary bg-card/50 backdrop-blur-sm font-handwriting mb-4"
          >
            Hành trình khôn lớn
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-handwriting">
            Cột mốc của Đậu Nhỏ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Theo dõi hành trình lớn lên của Đậu Nhỏ, từng khoảnh khắc quý giá
            một
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Completed Milestones */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Đã hoàn thành
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-12">
                {completedMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6 md:gap-8"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full ${milestone.bgColor} flex items-center justify-center border-4 border-background shadow-lg`}
                      >
                        <milestone.icon
                          className={`w-8 h-8 ${milestone.color}`}
                        />
                      </div>
                      {/* Connecting dot on line */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pt-2">
                      <Card className="border shadow-lg bg-card hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                {milestone.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{milestone.date}</span>
                                </div>
                                {milestone.time && (
                                  <div className="flex items-center gap-1">
                                    <span>•</span>
                                    <span>{milestone.time}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700"
                            >
                              Hoàn thành
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Milestones */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-muted rounded-full"></div>
              Sắp tới
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>

              <div className="space-y-12">
                {upcomingMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6 md:gap-8 opacity-60"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full ${milestone.bgColor} flex items-center justify-center border-4 border-background shadow-lg`}
                      >
                        <milestone.icon
                          className={`w-8 h-8 ${milestone.color}`}
                        />
                      </div>
                      {/* Connecting dot on line */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-muted rounded-full border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pt-2">
                      <Card className="border shadow-lg bg-card">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                {milestone.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{milestone.date}</span>
                                </div>
                                {milestone.time && (
                                  <div className="flex items-center gap-1">
                                    <span>•</span>
                                    <span>{milestone.time}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700"
                            >
                              Sắp tới
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">
              &quot;
            </div>
            <blockquote className="text-2xl md:text-3xl font-handwriting text-foreground/80 relative z-10 px-8 py-6">
              Mỗi cột mốc là một bước tiến, mỗi khoảnh khắc là một kỷ niệm.
              Chúng ta đang cùng nhau viết nên câu chuyện đẹp nhất của cuộc đời.
            </blockquote>
            <div className="absolute -bottom-8 -right-4 text-6xl text-primary/20 font-serif rotate-180">
              &quot;
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary font-medium">
            <Heart className="w-5 h-5 fill-current" />
            <span>Bố & Mẹ</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
