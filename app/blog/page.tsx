"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Heart, MessageCircle, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Ngày đầu tiên của Đậu Nhỏ",
    excerpt:
      "Hôm nay là ngày đầu tiên Đậu Nhỏ về nhà. Cả gia đình đều vui mừng và háo hức. Mọi thứ đều mới mẻ và đầy cảm xúc...",
    content:
      "Hôm nay là ngày đầu tiên Đậu Nhỏ về nhà. Cả gia đình đều vui mừng và háo hức. Mọi thứ đều mới mẻ và đầy cảm xúc. Đậu Nhỏ đã ngủ rất ngoan và bố mẹ đã có những khoảnh khắc tuyệt vời bên con.",
    author: "Bố & Mẹ",
    date: "2 Tháng 2, 2025",
    category: "Hành trình",
    image: "/images/baby/IMG_1425.jpg",
    readTime: "3 phút",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    title: "Những giấc ngủ đầu tiên",
    excerpt:
      "Đậu Nhỏ đã bắt đầu có nhịp sinh hoạt riêng. Những giấc ngủ ngắn ban ngày và giấc ngủ dài ban đêm đang dần hình thành...",
    content:
      "Đậu Nhỏ đã bắt đầu có nhịp sinh hoạt riêng. Những giấc ngủ ngắn ban ngày và giấc ngủ dài ban đêm đang dần hình thành. Bố mẹ đang học cách hiểu và đáp ứng nhu cầu của con.",
    author: "Mẹ",
    date: "5 Tháng 2, 2025",
    category: "Chăm sóc",
    image: "/images/baby/IMG_1426.jpg",
    readTime: "2 phút",
    likes: 18,
    comments: 5,
  },
  {
    id: 3,
    title: "Nụ cười đầu tiên",
    excerpt:
      "Hôm nay Đậu Nhỏ đã cười lần đầu tiên! Đó là khoảnh khắc kỳ diệu nhất mà bố mẹ từng trải qua. Nụ cười ấy làm tan chảy mọi mệt mỏi...",
    content:
      "Hôm nay Đậu Nhỏ đã cười lần đầu tiên! Đó là khoảnh khắc kỳ diệu nhất mà bố mẹ từng trải qua. Nụ cười ấy làm tan chảy mọi mệt mỏi và khiến chúng ta nhận ra rằng mọi thứ đều đáng giá.",
    author: "Bố",
    date: "10 Tháng 2, 2025",
    category: "Khoảnh khắc",
    image: "/images/baby/IMG_1427.jpg",
    readTime: "4 phút",
    likes: 32,
    comments: 12,
  },
  {
    id: 4,
    title: "Lần đầu tiên tắm nắng",
    excerpt:
      "Hôm nay là lần đầu tiên Đậu Nhỏ được tắm nắng. Ánh nắng ấm áp chiếu xuống làn da mềm mại của con, tạo nên một khoảnh khắc đẹp đẽ...",
    content:
      "Hôm nay là lần đầu tiên Đậu Nhỏ được tắm nắng. Ánh nắng ấm áp chiếu xuống làn da mềm mại của con, tạo nên một khoảnh khắc đẹp đẽ và thanh bình. Đậu Nhỏ đã rất thích thú với trải nghiệm mới này.",
    author: "Bố & Mẹ",
    date: "15 Tháng 2, 2025",
    category: "Trải nghiệm",
    image: "/images/baby/IMG_1428.jpg",
    readTime: "3 phút",
    likes: 28,
    comments: 9,
  },
];

const categories = [
  { name: "Tất cả", count: 4 },
  { name: "Hành trình", count: 1 },
  { name: "Chăm sóc", count: 1 },
  { name: "Khoảnh khắc", count: 1 },
  { name: "Trải nghiệm", count: 1 },
];

export default function BlogPage() {
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
            Nhật ký yêu thương
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-handwriting">
            Blog của Đậu Nhỏ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chia sẻ những khoảnh khắc, cảm xúc và hành trình lớn lên của Đậu Nhỏ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <h2 className="text-xl font-bold text-foreground">Danh mục</h2>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-shadow group cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} đọc</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Xem thêm bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
