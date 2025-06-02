import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gurwinder",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "gurwindersinghvlogs@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Punjabi", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gsingh105",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/gurwindersingh-only",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">JusticeHub AI</strong></>,
    href: "/work/JusticeHubAI",
  },
  subline: (
    <>
      I'm Gurwinder, a front-end developer specializing in React and modern web technologies. I'm passionate about creating 
      <br/> seamless user experiences and currently looking for the right opportunity to make an impact.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gurwinder is a front-end developer from Batala, Punjab, specializing in building dynamic web applications
        with clean, modern interfaces. He focuses on creating optimized user experiences using the latest
        web technologies and best practices in front-end development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Webbers Live Solutions",
        timeframe: "June 2023 - July 2023",
        role: "Web Developer Intern",
        achievements: [
         <>
          Built dynamic user interfaces using React, JavaScript, and CSS, focusing on creating
          responsive designs that work seamlessly across desktop and mobile devices.
         </>,
         <>
          Participated in code reviews and agile development processes, learning best practices
          for component reusability, performance optimization, and modern front-end workflows.
         </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
          },
        ],
      },
      {
        company: "Webbers UX",
        timeframe: "June 2024 - july 2024",
        role: "Cloud Computing Trainee",
        achievements: [
         <>
          Gained hands-on experience with AWS core services including EC2 and S3, learning
          cloud architecture principles and best practices for scalable web applications.
         </>,
         <>
          Completed training modules on cloud security, monitoring, and deployment strategies,
          earning foundational knowledge in DevOps practices and infrastructure management.
         </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sant Longowal Institute of Engineering and Technology (CFTI)",
        description: <>Studied Bachelor of Engineering in Computer Science and Engineering (2021-2025)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
  
      {
  title: "Next.js",
  description: <>Building full-stack web applications with Next.js, focusing on server-side rendering and optimal performance.</>,
  images: [
    {
    },
  ],
},
{
  title: "React",
  description: <>Creating dynamic user interfaces with React hooks, context API, and modern component patterns for scalable applications.</>,
  images: [
    {
    },
  ],
},
{
  title: "TypeScript",
  description: <>Writing type-safe JavaScript code with TypeScript to catch errors early and improve development productivity.</>,
  images: [
    {
    },
  ],
},
{
  title: "Tailwind CSS",
  description: <>Crafting responsive, mobile-first designs with utility-first CSS framework for rapid UI development.</>,
  images: [
    {
    },
  ],
},
{
  title: "Node.js",
  description: <>Building robust backend APIs and server-side applications using Node.js and Express framework.</>,
  images: [
    {
    },
  ],
},
{
  title: "MongoDB",
  description: <>Designing and managing NoSQL databases with MongoDB for flexible, document-based data storage solutions.</>,
  images: [
    {
    },
  ],
},
{
  title: "SQL",
  description: <>Designing and managing relational databases with SQL for structured data storage, complex queries, and data analysis solutions.</>,
  images: [
    {
    },
  ],
},
{
  title: "Git & GitHub",
  description: <>Managing version control and collaborating on projects using Git workflows and GitHub for seamless team development.</>,
  images: [
    {
    },
  ],
},

    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, home, about, blog, work};
