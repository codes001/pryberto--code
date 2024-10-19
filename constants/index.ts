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
      "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Innovating the Future ",
    subtitle: "Empowering the world with cutting-edge technology.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Tech-Driven Solutions",
    subtitle: "Transforming businesses with innovative digital tools.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Shaping Tomorrow's Tech",
    subtitle: "Redefining possibilities through smart technology.",
  },
];
