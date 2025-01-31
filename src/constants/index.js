import images from "../assets";

export const pages = [
  {
    id: "1",
    title: "Home",
    link: "",
    icon: images.Home,
  },
  {
    id: "2",
    title: "About",
    link: "about",
    icon: images.about,
  },
  {
    id: "3",
    title: "Skills",
    link: "skills",
    icon: images.skills,
  },
  {
    id: "4",
    title: "Portfolio",
    link: "Portfolio",
    icon: images.projects,
  },
  {
    id: "5",
    title: "Contact",
    link: "contact-me",
    icon: images.contact,
  },
];
export const home = {
  job: "Front-End",
  resumeLink: "",
  img: images.hicham,
  mainSkills: [images.react, images.js, images.redux, images.tailwind],
};
export const services = [
  {
    id: "1",
    icon: images.frontEnd,
    title: "Front-End Development",
    description:
      "I specialize in building responsive and user-friendly websites and web applications using modern front-end technologies like React.js, Tailwind CSS, and JavaScript. I focus on creating smooth, engaging user experiences.",
  },
];
export const projects = [
  {
    id: "1",
    img: images.brainwave,
    categorie: "react",
    title: "Brainwave",
    description:
      " an interactive and dynamic website showcasing my journey as a web developer and programmer. This website is a curated collection of projects, ideas, and innovations that reflect my technical expertise, creative problem-solving, and commitment to continuous learning.",
    link: "https://brainwave-peach-ten.vercel.app/",
    techs: ["React", "Tailwind css"],
    githubRepo: "https://github.com/HichamIssoual/Brainwave",
  },
  {
    id: "2",
    img: images.novaBank,
    categorie: "react",
    title: "Novabank",
    description:
      "Welcome to NovaBank, your go-to platform for secure and innovative banking solutions.Manage your finances easily with our intuitive, user-friendly interface.Experience seamless transactions and exceptional customer service.Banking made simple and fast.",
    link: "https://nova-bank-xi.vercel.app/",
    techs: ["React", "Tailwind css"],
    githubRepo: "https://github.com/HichamIssoual/NovaBank",
  },
  {
    id: "3",
    img: images.dashboard,
    categorie: "html css",
    title: "Dashboard Ui",
    description:
      "a modern and user-friendly dashboard designed to provide a comprehensive overview of data and functionality in an organized and visually appealing manner. Key features of the dashboard include",
    link: "https://hichamissoual.github.io/Template-Six/",
    techs: ["html", "Css"],
    githubRepo: "https://github.com/HichamIssoual/Template-Six",
  },
  {
    id: "4",
    img: images.weather,
    categorie: "js",
    title: "Weather",
    description:
      "This application allows you to search for any city and obtain the current weather conditions. Simply enter the city name to receive up-to-date information, including temperature, humidity, and wind speed.",
    link: "https://hichamissoual.github.io/Weather-App/",
    techs: ["Html", "Css", "js"],
    githubRepo: "https://github.com/HichamIssoual/Weather-App",
  },
];
export const categorieProjects = ["All", "react", "html css", "js"];
export const aboutContact = [
  {
    id: "1",
    title: "El Ksiba-Morocco",
    icon: images.location,
  },
  {
    id: "2",
    title: "hichamissoual.one@gmail.com",
    icon: images.mail,
    link: "hichamissoual.one@gmail.com",
  },
  {
    id: "3",
    title: "@Hichamissoual",
    icon: images.githubContact,
    link: "https://github.com/hichamIssoual/",
  },
];
export const personalIntrest = [
  {
    id: "1",
    icon: images.back_end,
    title: "Back-End Development",
    description:
      "Exploring the world of back-end technologies, including Node.js and databases, to build full-stack applications.",
  },
  {
    id: "2",
    icon: images.linux,
    title: "Linux Enthusiast",
    description:
      "Passionate about Linux systems and open-source software, focusing on performance and customization.",
  },
  {
    id: "3",
    icon: images.english,
    title: "Learning English",
    description:
      "Dedicated to improving my English language skills to enhance communication and professional opportunities.",
  },
  {
    id: "4",
    icon: images.books,
    title: "Reading Books",
    description:
      "Enjoy reading books on personal development, and fiction to expand my knowledge and creativity.",
  },
  {
    id: "5",
    icon: images.youtube,
    title: "Content Creation",
    description:
      "Creating tech-related content on YouTube, sharing knowledge about programming, Linux, and productivity tools.",
  },
];
export const frontEnd_Skills = [
  {
    id: "1",
    title: "Html",
    icon: images.html,
    yearsExp: "1+ year experience",
    percent: 90,
  },
  {
    id: "2",
    title: "Css",
    icon: images.css,
    yearsExp: "1+ year experience",
    percent: 85,
  },
  {
    id: "3",
    title: "JavaScript ES6+",
    icon: images.js,
    yearsExp: "Less than a year experience",
    percent: 80,
  },
  {
    id: "4",
    title: "Tailwind css",
    icon: images.tailwind,
    yearsExp: "Less than a year experience",
    percent: 85,
  },
  {
    id: "5",
    title: "React",
    icon: images.react,
    yearsExp: "Less than a year experience",
    percent: 85,
  },
  {
    id: "6",
    title: "Redux",
    icon: images.redux,
    yearsExp: "Less than a year experience",
    percent: 75,
  },
  {
    id: "7",
    title: "Framer Motion",
    icon: images.framer,
    yearsExp: "Less than a year experience",
    percent: 40,
  },
];
export const ToolsSkills = [
  {
    id: "1",
    title: "Git",
    icon: images.git,
    percent: 50,
  },
  {
    id: "2",
    title: "Github",
    icon: images.github,
    percent: 50,
  },
  {
    id: "3",
    title: "Vs code",
    icon: images.vscode,
    percent: 65,
  },
  {
    id: "4",
    title: "npm",
    icon: images.npm,
    percent: 40,
  },
];

export const contact = [
  {
    id: "1",
    icon: images.phone,
    title: "Phone",
    contactInfo: "+212 675347899",
    link: "+212675347899",
  },
  {
    id: "2",
    icon: images.mail,
    title: "E-mail",
    contactInfo: "hichamissoual.one@gmail.com",
    link: "hichamissoual.one@gmail.com",
  },
  {
    id: "3",
    icon: images.linkedin,
    title: "Linkedin",
    contactInfo: "@hichamissoual",
    link: "https://www.linkedin.com/in/hichamissoual/",
  },
  {
    id: "4",
    icon: images.xTwiter,
    title: "X",
    contactInfo: "@hicham_dev",
    link: "https://x.com/hicham_dev",
  },
  {
    id: "5",
    icon: images.facebook,
    title: "Facebook",
    contactInfo: "@hichamissoual.dev",
    link: "https://www.facebook.com/hichamissoual.dev/",
  },
];
