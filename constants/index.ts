export const navbarLinks = [
  {
    label: "Home",
    id: "#hero",
  },
  {
    label: "About Us",
    id: "#about",
  },
  {
    label: "Service",
    id: "#service",
  },
  {
    label: "Contact",
    id: "#contact",
  },
];

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/9ioq0auj1/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg?updatedAt=1708695993012",
    title: "Innovating the Future ",
    subtitle: "Empowering the world with cutting-edge technology.",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/9ioq0auj1/christiann-koepke-vCaTPkYjWOo-unsplash.jpg?updatedAt=1708695989263",
    title: "Tech-Driven Solutions",
    subtitle: "Transforming businesses with innovative digital tools.",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/9ioq0auj1/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg?updatedAt=1708695991851",
    title: "Shaping Tomorrow's Tech",
    subtitle: "Redefining possibilities through smart technology.",
  },
];
