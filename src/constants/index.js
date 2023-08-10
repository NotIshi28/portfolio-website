import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    unity,
    csharp,
    python,
    nextjs,
    udaan,
    designflow,
    retrorampage
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
  ];
  
  const projects = [
    {
      name: "Design Flow",
      description:
        "A social media app which unites Developers and Designers. Designflow also offers a number of features that are designed to make it easier for designers and developers to collaborate, such as the ability to comment on each other's work and to create projects together. The main idea of Designflow is to create a space where designers and developers can work together to create better products. By bringing these two groups together, Designflow can help to bridge the gap between design and development, and it can help to create more innovative and user-friendly products.",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "grafbase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "red-text-gradient",
        },
      ],
      image: designflow,
      source_code_link: "https://github.com/NotIshi28/DesignFlow",
    },
    {
      name: "Retro Rampage",
      description:
        "Steelborne's Revenge is an adrenaline-pumping side-scrolling action game that takes you on a thrilling journey through abandoned spaces and castles. Step into the role of Max Steelborne, an urban explorer turned vigilante. Explore once-vibrant locations now overrun by waves of robotic foes, corrupted AI, and mutated creatures. Uncover the secrets behind the desolation while utilizing the environment to your advantage. ",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: retrorampage,
      source_code_link: "https://github.com/NotIshi28/RetroRampage_SourceCode",
    },
    {
      name: "Udaan",
      description:
        "Udaan is an e-learning platform that provides affordable and accessible online courses to underprivileged people and rural populations in India. Udaan offers a variety of courses on a variety of topics, including business, technology, entrepreneurship, and more. The courses are taught by experienced instructors and are available in both Hindi and English. Udaan's courses are much more affordable than those offered by other online learning platforms. A single course on Udaan costs as little as Rs. 30",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
      ],
      image: udaan,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, projects };