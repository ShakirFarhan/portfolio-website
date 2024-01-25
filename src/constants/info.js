import elitceler from '../assets/elitceler.svg';
import ivoyant from '../assets/ivoyant-logo.png';
import nfc from '../assets/nfclogo.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwindcss.svg';
import jwt from '../assets/jwt.svg';
import socketio from '../assets/socketio.svg';
import oauth from '../assets/oauth.svg';
import chat from '../assets/chat.svg';
import blogging from '../assets/blogging.svg';
import javascript from '../assets/javascript.png';
import git from '../assets/git.png';
import youtube from '../assets/youtube.svg';
import rapid from '../assets/rapidapi.svg';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';

import typescript from '../assets/typescript.png';

import aws from '../assets/aws.svg';
import postman from '../assets/postman.svg';

import docker from '../assets/docker.png';
import github from '../assets/github.png';

import nextjs from '../assets/nextjs.svg';
import redis from '../assets/redis.svg';
import graphql from '../assets/graphql.svg';
import zustand from '../assets/zustand.png';
import python from '../assets/python.png';

import nest from '../assets/nest.svg';

import postgres from '../assets/postgres.png';
import vscode from '../assets/vscode.svg';
import notion from '../assets/notion.svg';
// import tailwind from "../assets/t"

export const nfcInfo = [
  {
    key: 1,
    text: "Successfully completed 4 projects, including the company's main website",
  },
  {
    key: 3,
    text: 'Collaborated closely with team members to ensure project delivery within expected timelines',
  },
  {
    key: 4,
    text: 'Contributed to the development of new features and functionalities',
  },
  {
    key: 5,
    text: 'Implemented responsive design principles, ensuring optimal user experiences across various devices and screen sizes.',
  },
  {
    key: 6,

    text: 'Engaged in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency.',
  },
  {
    key: 7,

    text: 'Participated in user testing and feedback sessions, refining features based on user input and contributing to a user-centric development approach.',
  },
  {
    key: 8,
    text: 'Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.',
  },
];
export const ivoyantInfo = [
  {
    key: 1,
    text: 'Played a key role in developing a dynamic decision table component, contributing to its functionality and optimizing user interactions.',
  },
  {
    key: 2,
    text: 'Implemented key features, optimizing user interactions and decision-making processes.',
  },
  {
    key: 3,
    text: 'Contributed to the design and implementation of a metadata extractor, streamlining data retrieval and organization.',
  },
  {
    key: 4,

    text: 'Worked closely with a senior developers, gaining valuable insights and guidance in the intricacies of software development.',
  },
  {
    key: 5,

    text: 'Utilized languages and frameworks such as TypeScript, React.js, Nest.js, PostgreSQL, Zustand and Unit Testing  for the development of software applications.',
  },
  {
    key: 6,

    text: 'Collaborated in the design and documentation of software architectures, ensuring clarity and maintainability of codebases.',
  },
];
export const elitcelerInfo = [
  {
    key: 0,
    text: "Successfully delivered four projects Till date. This includes the development of custom backend solutions tailored to each client's unique requirements",
  },
  {
    key: 1,
    text: 'Designed and implemented scalable backend architectures, ensuring optimal performance and flexibility to accommodate future growth',
  },
  {
    key: 2,
    text: 'Demonstrated proficiency in a range of technologies, including  Node.js, Express.js, MongoDb, Redis, AWS S3, Docker to create robust and efficient backend systems',
  },
  {
    key: 3,
    text: 'Successfully navigated through different project categories, demonstrating adaptability and a deep understanding of unique industry requirements. Projects ranged from Ed-Tech, E-Commerce, healthcare and Service Marketplace] showcasing versatility and a broad skill set',
  },
  {
    key: 4,
    text: 'Worked closely with cross-functional teams, including frontend developers(App & Web), QA engineers and Devops Engineer',
  },
  {
    key: 5,
    text: 'Established a reputation for delivering projects on time and within budget, leading to high levels of client satisfaction and positive testimonials',
  },
];

export const experiences = [
  {
    id: '1',
    company: 'Eliceler Technologies',
    logo: elitceler,
    location: 'Hyderabad, Telangana, India',
    role: 'Backend Developer',
    duration: 'JULY 2023 - Present',
    description: elitcelerInfo,
  },
  {
    id: '2',
    company: 'Ivoyant ',
    logo: ivoyant,
    location: 'bengaluru, Karnataka, India',
    role: 'Software Engineer Intern',
    duration: 'APR 2023 - AUG 2023',
    description: ivoyantInfo,
  },
  {
    id: '3',
    company: 'NFC Solution',
    logo: nfc,
    location: 'Hyderabad, Telangana, India',
    role: 'Front End Developer Intern',
    duration: 'JUNE 2022 - DEC 2022',
    description: nfcInfo,
  },
];

export const projects = [
  {
    id: '1',
    name: 'RealTime Chat',
    coverImage: chat,
    workedOn: ['Website'],
    description: [
      'Real-time chat: users can send and receive messages in real-time',
      'User authentication: users can sign up, log in, and log out using JWT and Google Auth',
      'Group creation: users can create chat rooms and invite others to join',
      'Notifications: users can receive notifications on new messages',
      'Emojis: users can send and receive emojis in messages',
      ' Profile page where users can update their avatar and display name.',
      'Users can create a room to chat with others.',
      ' Search functionality.',
      'Responsive design: the website is optimized for different screen sizes and devices',
    ],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: redux,
        name: 'Redux',
      },
      {
        logo: tailwind,
        name: 'Tailwind CSS',
      },

      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: express,
        name: 'Express.js',
      },
      {
        logo: mongodb,
        name: 'MongoDB',
      },
      {
        logo: socketio,
        name: 'Socket.io',
      },
      {
        logo: jwt,
        name: 'JWT',
      },
      {
        logo: oauth,
        name: 'Google OAuth',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://talk-time.netlify.app/',
  },
  {
    id: '2',
    name: 'Blogging Website',
    coverImage: blogging,
    description: [
      'The website offers an intuitive and user-friendly interface for easy navigation and interaction.',
      'Users can sign up, log in, and log out using JWT',
      'Users can like, bookmark, follow, and unfollow posts and other users to personalize their experience and engage with content.',
      'The website is designed to be responsive across various devices and screen sizes, ensuring a seamless browsing experience for users.',
      'Integrated social sharing functionality allows users to share blog posts and other content across various social media platforms, increasing visibility and reach.',
      'Profile page where users can update their avatar and display name.',
    ],
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: express,
        name: 'Express.js',
      },
      {
        logo: mongodb,
        name: 'MongoDB',
      },
      {
        logo: jwt,
        name: 'JWT',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://youtu.be/3OosYaPqqdA',
  },
  {
    id: '3',
    name: 'Youtube Clone',
    description: [
      'Users can watch videos with smooth and responsive playback, offering a user experience similar to the original YouTube platform.',
      'The clone includes a robust search functionality, allowing users to discover and explore a vast library of videos based on keywords, categories, and user preferences.',
      'Tailwind CSS is utilized to create a responsive and visually appealing design, ensuring the application is optimized for various screen sizes and devices.',
    ],
    coverImage: youtube,
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: redux,
        name: 'Redux',
      },
      {
        logo: tailwind,
        name: 'Tailwind CSS',
      },
      {
        logo: git,
        name: 'Git',
      },
      {
        logo: rapid,
        name: 'Rapid API',
      },
    ],
    link: 'https://youtubeclone-farhan.netlify.app',
  },
];

export const frontend = [
  {
    logo: html,
    name: 'HTML',
  },
  {
    logo: css,
    name: 'CSS',
  },
  {
    logo: javascript,
    name: 'Javascript',
  },
  {
    logo: typescript,
    name: 'Typescript',
  },
  {
    logo: react,
    name: 'React.js',
  },
  {
    logo: nextjs,
    name: 'Next.js',
  },
  {
    logo: react,
    name: 'React Native',
  },
  {
    logo: redux,
    name: 'Redux',
  },
  {
    logo: zustand,
    name: 'Zustand',
  },
  {
    logo: tailwind,
    name: 'Tailwind CSS',
  },
];
export const backend = [
  {
    logo: node,
    name: 'Node.js',
  },
  {
    logo: express,
    name: 'Express.js',
  },
  {
    logo: nest,
    name: 'Nest.js',
  },
  {
    logo: graphql,
    name: 'GraphQL',
  },
  {
    logo: mongodb,
    name: 'MongoDB',
  },
  {
    logo: postgres,
    name: 'PostgreSQL',
  },
  {
    logo: aws,
    name: 'AWS',
  },
  {
    logo: redis,
    name: 'Redis',
  },
  {
    logo: docker,
    name: 'Docker',
  },
];
export const other = [
  {
    logo: java,
    name: 'Java',
  },
  {
    logo: python,
    name: 'Python',
  },
  {
    logo: git,
    name: 'Git',
  },
  {
    logo: github,
    name: 'Github',
  },
  {
    logo: postman,
    name: 'Postman',
  },
  {
    logo: vscode,
    name: 'VS Code',
  },
  {
    logo: notion,
    name: 'Notion',
  },
];
