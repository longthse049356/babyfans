"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Heart, MessageSquare, Send, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const guestbookEntries = [
  {
    id: 1,
    name: "Bà Ngoại",
    message:
      "Chúc mừng gia đình! Đậu Nhỏ thật đáng yêu. Bà yêu cháu nhiều lắm! ❤️",
    date: "2 Tháng 2, 2025",
    time: "14:30",
    relationship: "Gia đình",
  },
  {
    id: 2,
    name: "Cô Hoa",
    message:
      "Chúc mừng bố mẹ! Đậu Nhỏ thật xinh đẹp. Chúc bé luôn khỏe mạnh và hạnh phúc!",
    date: "2 Tháng 2, 2025",
    time: "15:45",
    relationship: "Bạn bè",
  },
  {
    id: 3,
    name: "Chú Minh",
    message:
      "Chúc mừng gia đình mới! Đậu Nhỏ sẽ lớn lên thật ngoan và thông minh. Chúc cả nhà luôn hạnh phúc!",
    date: "3 Tháng 2, 2025",
    time: "10:20",
    relationship: "Gia đình",
  },
  {
    id: 4,
    name: "Anh Tuấn",
    message:
      "Chúc mừng! Đậu Nhỏ thật đáng yêu. Mong rằng bé sẽ có một tuổi thơ đẹp đẽ và đầy kỷ niệm!",
    date: "4 Tháng 2, 2025",
    time: "09:15",
    relationship: "Bạn bè",
  },
  {
    id: 5,
    name: "Dì Lan",
    message:
      "Chúc mừng bố mẹ! Đậu Nhỏ là món quà tuyệt vời nhất. Chúc bé luôn được yêu thương và chăm sóc!",
    date: "5 Tháng 2, 2025",
    time: "16:00",
    relationship: "Gia đình",
  },
];

export default function GuestbookPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    relationship: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", message: "", relationship: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
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
            Lời chúc yêu thương
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-handwriting">
            Sổ lưu bút
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Để lại lời chúc, lời nhắn nhủ yêu thương cho Đậu Nhỏ và gia đình
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Viết lời chúc
              </h2>
              <p className="text-muted-foreground">
                Chia sẻ những lời chúc tốt đẹp và kỷ niệm với Đậu Nhỏ
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tên của bạn <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Nhập tên của bạn"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="relationship"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mối quan hệ
                    </label>
                    <Input
                      id="relationship"
                      placeholder="Ví dụ: Bạn bè, Gia đình..."
                      value={formData.relationship}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          relationship: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Lời chúc <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Viết lời chúc của bạn ở đây..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto rounded-full px-8"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Gửi lời chúc
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guestbook Entries */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary fill-current" />
            Lời chúc từ mọi người
          </h2>

          {guestbookEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">
                          {entry.name}
                        </h3>
                        {entry.relationship && (
                          <Badge variant="outline" className="mt-1 text-xs">
                            {entry.relationship}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{entry.date}</span>
                      </div>
                      <div>{entry.time}</div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {entry.message}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no entries) */}
        {guestbookEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Chưa có lời chúc nào. Hãy là người đầu tiên để lại lời chúc!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
