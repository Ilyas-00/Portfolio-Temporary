import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ilyas AKIOUI',
  title: "Hello, I am Ilyas :)",
  description:
    "I'm a passionate Full Stack web developer, but now I'm dedicated to becoming an MLOps expert. My goal is to master the essential practices and tools for efficiently deploying and managing machine learning models in production.",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  
  linkedin: 'https://www.linkedin.com/in/ilyas-akioui/',
  github: 'https://github.com/Ilyas-00',
  facebook: 'https://www.facebook.com/profile.php?id=100090799121911',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'A passionate Full Stack developer enthusiastic about exploring various technology stacks.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Développement d\'applications full-stack '),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infrastructure and DevOps',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', 
      skills: [
        emoji('⚡ Development and deployment automation'),
       
        emoji(
          '⚡ Database management'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Sqlite',
          iconifyTag: 'logos:sqlite',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },

    
    {
      title: 'Backend Development and DevOps',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      
      skills: [
        emoji(
          '⚡ Développement back-end'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Nodejs',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'Express',
          iconifyTag: 'logos:Express',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
       
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'EPSI Engineering School ',
    subHeader: 'Bachelor\'s Degree in Computer Science with a specialization in DevOps',
    duration: 'September 2022 - July 2025',
    desc: 'Currently working towards a Bachelor\'s degree in Computer Science with a focus on DevOps practices and methodologies.',
    grade: '2',
    descBullets: [
      'Close collaboration between development and operations teams',
      'Integration of technical skills and operational processes',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Front/Back-end Developer',
    company: 'KEOZIA',
    companyLogo: '/img/icons/common/logo_keozia.png',
    date: 'April 2023 – July 2023',
    desc: 'During my time at the company, I worked on both front-end and back-end tasks. I extracted data from certain APIs, designed websites, and made software modifications.',
  },
  {
    role: 'Third-Party Environmental Supervisor',
    company: 'RTE (Réseau de Transport d\'Electricité) ',
    companyLogo: '/img/icons/common/rte.png',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

// export const projects: ProjectType[] = [
//   {
//     name: 'developer-portfolio',
//     desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
//     github: 'https://github.com/1hanzla100/developer-portfolio',
//     link: 'https://developer-portfolio-1hanzla100.vercel.app/',
//   },
//   {
//     name: 'AtlasMart',
//     desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
//     github: 'https://github.com/1hanzla100/Django-React-Marketplace',
//   },
//   {
//     name: 'Technota (Forum)',
//     desc: 'Get hands-on experience in technical skills with Technota',
//     github: 'https://github.com/1hanzla100/django-react-forum',
//   },
//   {
//     name: 'Shopaza (Ecommerce)',
//     desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
//     github: 'https://github.com/1hanzla100/Django-ecommerce',
//   },
// ];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
// export const seoData: SEODataType = {
//   title: 'Hanzla Tauqeer',
//   description:
//     'A passionate Full Stack Web Developer and Blockchain Developer.',
//   author: 'Hanzla Tauqeer',
//   image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
//   url: 'https://developer-portfolio-1hanzla100.vercel.app',
//   keywords: [
//     'Hanzla',
//     'Hanzla Tauqeer',
//     '@1hanzla100',
//     '1hanzla100',
//     'Portfolio',
//     'Hanzla Portfolio ',
//     'Hanzla Tauqeer Portfolio',
//   ],
// };
