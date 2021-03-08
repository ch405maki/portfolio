import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'marfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mark',
  subtitle: 'Graphic designer/Web developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m your Graphic Designer/Web Developer with more than 5years of experience. If you’re looking for a professional with passion, enthusiasm and deep expertise, you’ve come to the right place.',
  paragraphTwo:
    'I started as a graphic designer/programmer year 2019, i came with this skills by some seminars and enhance it as a self-thought designer. I make banner and logo as well it is belong to my interest.',
  paragraphThree:
    'I graduated university and got my bachelor degree in Information Technology "it isnt about what you know; it is about what you can figure out.”',
  resume: 'https://www.resumemaker.online/en.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'A new project is coming soon… stay tuned!',
    info2: '',
    url: '',
    repo: 'https://github.com/ch405maki/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'A new project is coming soon… stay tuned!',
    info2: '',
    url: '',
    repo: 'https://github.com/ch405maki/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'A new project is coming soon… stay tuned!',
    info2: '',
    url: '',
    repo: 'https://github.com/ch405maki/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'markmanuel0317@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://web.facebook.com/mark.manuel.96343/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ch405maki/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
