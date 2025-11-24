"use client";

import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-4 font-handwriting">
              Về BabyFans
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nơi để kỷ niệm những khoảnh khắc và cột mốc quý giá của hành trình
              khôn lớn của bé. Được tạo bằng tình yêu cho gia đình và bạn bè.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-4 font-handwriting">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@babyfans.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@babyfans.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Your City, Country</span>
              </li>
            </ul>
          </div>

          {/* Partners/Sponsors Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-4 font-handwriting">
              Đối tác & Nhà tài trợ
            </h3>
            <p className="text-muted-foreground mb-4">
              Bạn quan tâm đến việc hợp tác với chúng tôi? Chúng tôi rất muốn
              nghe từ bạn!
            </p>
            <a
              href="mailto:partners@babyfans.com"
              className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-colors"
            >
              Trở thành đối tác
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} BabyFans. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Được tạo bằng</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>cho bé yêu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
