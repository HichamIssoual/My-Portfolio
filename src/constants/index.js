import images from '../assets';

export const pages = [
  {
    id: '1',
    title: 'About',
    link: 'about',
    icon: images.about,
  },
  {
    id: '2',
    title: 'Skills',
    link: 'skills',
    icon: images.skills,
  },
  {
    id: '3',
    title: 'trophy',
    link: 'trophy',
    icon: images.achievements,
  },
  {
    id: '4',
    title: 'Services',
    link: 'services',
    icon: images.services,
  },
  {
    id: '5',
    title: 'Projects',
    link: 'projects',
    icon: images.projects,
  },
  {
    id: '6',
    title: 'Contact',
    link: 'contact-me',
    icon: images.contact,
  },
];
export const home = {
  job: 'Front-End',
  resumeLink: '',
  img: images.hicham,
};
export const services = [
  {
    id: '1',
    icon: images.frontEnd,
    title: 'Front-End Development',
    description:
      'I specialize in building responsive and user-friendly websites and web applications using modern front-end technologies like React.js, Tailwind CSS, and JavaScript. I focus on creating smooth, engaging user experiences.',
  },
];
export const projects = [
  {
    id: '1',
    img: images.brainwave,
    categorie: 'react',
    title: 'Brainwave',
    description:
      ' an interactive and dynamic website showcasing my journey as a web developer and programmer. This website is a curated collection of projects, ideas, and innovations that reflect my technical expertise, creative problem-solving, and commitment to continuous learning.',
    link: 'https://brainwave-peach-ten.vercel.app/',
  },
  {
    id: '2',
    img: images.novaBank,
    categorie: 'react',
    title: 'Novabank',
    description:
      'your go-to platform for creative and innovative web solutions. This document provides you with all the information needed to get started, understand the project, and contribute effectively.',
    link: 'https://nova-bank-xi.vercel.app/',
  },
  {
    id: '3',
    img: images.dashboard,
    categorie: 'html css',
    title: 'Dashboard Ui',
    description:
      'a modern and user-friendly dashboard designed to provide a comprehensive overview of data and functionality in an organized and visually appealing manner. Key features of the dashboard include',
    link: 'https://hichamissoual.github.io/Template-Six/',
  },
  {
    id: '4',
    img: images.weather,
    categorie: 'js',
    title: 'Weather',
    description:
      'This application allows you to search for any city and obtain the current weather conditions. Simply enter the city name to receive up-to-date information, including temperature, humidity, and wind speed.',
    link: 'https://hichamissoual.github.io/Weather-App/',
  },
];