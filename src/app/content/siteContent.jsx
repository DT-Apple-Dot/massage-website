import React from "react";

const siteContent = {
  en: {
    navLinks: [
      { title: "About", path: "#about" },
      { title: "Services", path: "#projects" },
      { title: "Contact", path: "#contact" },
    ],
    hero: {
      badge: "Premium Bangkok Outcall Massage",
      heading: "Bangkok",
      chooseHeading: "Why choose us",
      rightHeading: "A smoother booking experience",
      rightDescription:
        "Book with confidence using easy chat channels and get fast replies from our professional massage team.",
      typeWords: [
        "GRAND MASSAGE",
        "BANGKOK OUTCALL MASSAGE",
        "PREMIUM RELAXATION",
      ],
      description:
        "Experience ultimate relaxation with Grand Massage, the top Bangkok massage and Bangkok outcall massage service. Our professional therapists bring premium care directly to your hotel, apartment, or home in Bangkok.",
      book: "Book a Session",
      view: "View Services",
      feature1: {
        title: "Fast booking",
        description:
          "Reach us quickly through social chat and secure your preferred slot.",
      },
      feature2: {
        title: "Relax at home",
        description:
          "Enjoy safe, premium massage therapy in the comfort of your own location.",
      },
    },
    about: {
      heading: "ABOUT US",
      paragraphs: [
        "Our experienced and qualified therapists are dedicated to relieving stress, reducing muscle tension, and restoring physical balance. Every outcall massage service is performed with professionalism, hygiene, and care, ensuring a relaxing experience tailored to your needs.",
        "Your comfort is our top priority. Whether you are looking for a massage at your place after a long day, travel fatigue recovery, or regular wellness support, The Best Relax Massage provides a reliable and discreet professional outcall massage you can trust.",
      ],
    },
    servicesHeader: "OUR SERVICES",
    projects: [
      {
        id: 1,
        title: "Thai Massage",
        description:
          "Thai massage uses stretching and pressure techniques to relieve stress, improve flexibility and restore body-mind balance.",
        image: "/images/projects/Thai_Massage.jpg",
        tag: ["All", "Web"],
        prices: [
          { duration: "60 minutes", price: "900 Baht" },
          { duration: "90 minutes", price: "1000 Baht" },
          { duration: "120 minutes", price: "1200 Baht" },
        ],
      },
      {
        id: 2,
        title: "Oil Massage",
        description:
          "Oil Massage is a massage that uses oil applied to the skin to increase slipperiness and help you feel relaxed.",
        image: "/images/projects/oil_massage.png",
        tag: ["All", "Web"],
        prices: [
          { duration: "60 minutes", price: "1000 Baht" },
          { duration: "90 minutes", price: "1200 Baht" },
          { duration: "120 minutes", price: "1500 Baht" },
        ],
      },
      {
        id: 3,
        title: "Aromatherapy Massage",
        description:
          "Aromatherapy Coconut Oil Massage is a combination of health and beauty massage using high-nutritious cold-pressed coconut oil.",
        image: "/images/projects/Aromatherapy_Massage.webp",
        tag: ["All", "Web"],
        prices: [
          { duration: "60 minutes", price: "1200 Baht" },
          { duration: "90 minutes", price: "1500 Baht" },
          { duration: "120 minutes", price: "1800 Baht" },
        ],
      },
      {
        id: 4,
        title: "Deep tissue massage",
        description:
          "A deep relaxation massage for the muscles. This massage techniques involve use of thumb and elbow for deep pressing. Pressure is rolled along muscles slowly and heavily to stimulate deeper muscle layers. The focus is on legs back & shoulders to help relieve locked-in muscle tension. This massage is a whole-body massage suitable for those who like moderate to heavy massage. Not recommended as a first massage experience.",
        image: "/images/projects/Deep_Tissue_Massage.jpg",
        tag: ["All", "Mobile"],
        prices: [
          { duration: "60 minutes", price: "2200 Baht" },
          { duration: "90 minutes", price: "2400 Baht" },
          { duration: "120 minutes", price: "2500 Baht" },
        ],
      },
    ],
    footer: {
      brand: "GRAND MASSAGE",
      description:
        "Experience ultimate relaxation with our premium outcall massage services in Bangkok.",
      quickLinks: ["Home", "Services", "About", "Contact"],
      services: [
        "Thai Massage",
        "Oil Massage",
        "Aromatherapy",
        "Four Hands Massage",
        "Deep Tissue Massage",
      ],
      contactHeading: "Contact Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  zh: {
    navLinks: [
      { title: "关于", path: "#about" },
      { title: "服务", path: "#projects" },
      { title: "联系", path: "#contact" },
    ],
    hero: {
      badge: "曼谷优质上门按摩",
      heading: "曼谷",
      chooseHeading: "为什么选择我们",
      rightHeading: "更顺畅的预约体验",
      rightDescription:
        "使用便捷的聊天渠道放心预约，并从我们的专业按摩团队获得快速回复。",
      typeWords: ["皇家按摩", "曼谷上门按摩", "优质放松"],
      description:
        "体验终极放松，大按摩提供曼谷顶级上门按摩服务。我们的专业技师会把高品质护理直接带到您的酒店、公寓或住所。",
      book: "预约服务",
      view: "查看服务",
      feature1: {
        title: "快速预约",
        description: "通过社交聊天快速联系，锁定您偏好的时间。",
      },
      feature2: {
        title: "在家放松",
        description: "在您自己的地点享受安全、优质的按摩疗程。",
      },
    },
    about: {
      heading: "关于我们",
      paragraphs: [
        "我们的经验丰富且资质齐全的技师致力于缓解压力、减轻肌肉紧张并恢复身体平衡。每一次上门按摩服务都以专业、卫生和关怀执行，确保为您提供符合需求的放松体验。",
        "您的舒适是我们的首要任务。无论您是在漫长一天后希望在住所按摩、旅行疲劳恢复，还是寻求定期保健支持，最佳放松按摩都能提供值得信赖的隐私专业上门服务。",
      ],
    },
    servicesHeader: "我们的服务",
    projects: [
      {
        id: 1,
        title: "泰式按摩",
        description:
          "泰式按摩结合拉伸和按压手法以缓解压力、改善柔韧性并恢复身心平衡。",
        image: "/images/projects/Thai_Massage.jpg",
        tag: ["All", "Web"],
        prices: [
          { duration: "60分钟", price: "900 泰铢" },
          { duration: "90分钟", price: "1000 泰铢" },
          { duration: "120分钟", price: "1200 泰铢" },
        ],
      },
      {
        id: 2,
        title: "精油按摩",
        description: "精油按摩使用按摩油涂抹肌肤以增加润滑感，帮助您深度放松。",
        image: "/images/projects/oil_massage.png",
        tag: ["All", "Web"],
        prices: [
          { duration: "60分钟", price: "1000 泰铢" },
          { duration: "90分钟", price: "1200 泰铢" },
          { duration: "120分钟", price: "1500 泰铢" },
        ],
      },
      {
        id: 3,
        title: "香薰按摩",
        description:
          "香薰椰子油按摩结合健康与美感，使用高营养冷压椰子油进行护理。",
        image: "/images/projects/Aromatherapy_Massage.webp",
        tag: ["All", "Web"],
        prices: [
          { duration: "60分钟", price: "1200 泰铢" },
          { duration: "90分钟", price: "1500 泰铢" },
          { duration: "120分钟", price: "1800 泰铢" },
        ],
      },
      {
        id: 4,
        title: "四手联按摩",
        description:
          "四手按摩由两位技师同时进行，旨在创造深度放松且沉浸式的按摩体验。",
        image: "/images/projects/4hands.jpg",
        tag: ["All", "Mobile"],
        prices: [
          { duration: "60分钟", price: "2200 泰铢" },
          { duration: "90分钟", price: "2400 泰铢" },
          { duration: "120分钟", price: "2500 泰铢" },
        ],
      },
      {
        id: 5,
        title: "深层组织按摩",
        description:
          "深层放松肌肉的按摩，使用拇指和肘部进行深度按压，缓慢而有力地沿肌肉滚压，刺激更深层肌肉组织。适合喜欢中重力度的顾客，不建议首次体验者选择。",
        image: "/images/projects/Deep_Tissue_Massage.jpg",
        tag: ["All", "Mobile"],
        prices: [
          { duration: "60分钟", price: "2200 泰铢" },
          { duration: "90分钟", price: "2400 泰铢" },
          { duration: "120分钟", price: "2500 泰铢" },
        ],
      },
    ],
    footer: {
      brand: "GRAND MASSAGE",
      description: "体验极致放松，我们在曼谷提供优质上门按摩服务。",
      quickLinks: ["首页", "服务", "关于", "联系"],
      services: [
        "泰式按摩",
        "精油按摩",
        "香薰按摩",
        "四手按摩",
        "深层组织按摩",
      ],
      contactHeading: "联系信息",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  },
};

export default siteContent;
