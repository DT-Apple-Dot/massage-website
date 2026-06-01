import { FaInstagram, FaFacebook, FaWeixin } from "react-icons/fa";
import { SiLine } from "react-icons/si";

export const bookingChannels = [
  {
    name: "LINE",
    icon: SiLine,
    url: "https://line.me/",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 hover:bg-emerald-400/20",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/",
    color: "text-pink-500",
    bg: "bg-pink-500/10 hover:bg-pink-500/20",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/",
    color: "text-blue-500",
    bg: "bg-blue-500/10 hover:bg-blue-500/20",
  },
  {
    name: "WeChat",
    icon: FaWeixin,
    url: "https://wechat.com/",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
  },
];
