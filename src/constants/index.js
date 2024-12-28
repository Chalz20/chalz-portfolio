import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  laravel,
  udom,
  edenconsult,
  tanroads,
  ai4d,
  threejs,
  edenconsultweb,
  blogpost,
  student,
  ThreeDShirt
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "AI / ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Data Science Supporting Instructor ",
    company_name: "College of Informatics and Virtual Education (CIVE) ",
    icon: udom,
    iconBg: "#E6DEDD",
    date: "August 2022 - October 2022 ",
    points: [
      "Support the lead instructor in developing and delivering data science concepts to students.",
      "Offer one-on-one assistance to students, addressing their specific questions and challenges.", 
      "Lead hands-on workshops and lab sessions to reinforce theoretical concepts through practica application.", 
      "Guide and support students through their data science projects, providing feedback and advice." 
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "DMT Promotions,",
    icon: "https://imageplaceholder.net/600x400/eeeeee/131313?text=DMT",
    iconBg: "#E6DEDD",
    date: "May 2023 - Jun 2023",
    points: [
      "Developed a vote casting system that improved transparency and fairness"
    ],
  },
  {
    title: "ICT Officer Intern",
    company_name: "Tanzania National Roads Agency (TANROADS),",
    icon: tanroads,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023 ",
    points: [
      "Provided technical support to staff and resolved issues related to IT systems, software, and hardware.", 
      "Monitored and managed network security, ensuring data protection and compliance with organizational policies", 
      "Conducted regular system backups and data recovery operations ensuring data consistency and persistence", 
      "Participated in the setup and management of user accounts, permissions, and access controls.", 
      "Assisted in training employees on the use of IT systems and applications.",
      "Maintained inventory of IT equipment and managed procurement processes.", 
      "Collaborated with the IT team to develop and implement technology solutions that improved operational efficiency. ",
      "Assisted in the installation, configuration, and maintenance of hardware and software systems.,"
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "AI4DLab Anglophone",
    icon: ai4d,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jun 2024",
    points: [
      "Played a key role in system design contributing to the development of userfriendly and visually appealing interfaces. ",
      "Led the design and creation user friendly interfaces for a Facial Recognition Attendance system that streamlined the whole process of attendance verification and tracking in higher learning institutions ",
      "Contributed in code reviews that improved overall product efficiency and quality",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "EdenConsult",
    icon: edenconsult,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed and designed fully functional website (www.edenconsult.co.tz) that streamlined the organization's workflow and processes such as venue booking and enrollments using Laravel framework ",
      "Provide technical support and troubleshoot issues to ensure smooth operation of web applications."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was really impressed by the product he built me.",
    name: "Dr. Mohamed Mjahidi",
    designation: "Proffesor",
    company: "University Of Dodoma",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Charles does.",
    name: "Loisante Gabriel",
    designation: "Director",
    company: "Edenconsult Company Limited",
  },
  {
    testimonial:
      "He is very creative and totally dedicated to solving clients' problems",
    name: "Msami",
    designation: "Co-founder",
    company: "DMT Promotions",
  },
];

const projects = [
  {
    name: "Edenconsult site",
    description:
      "Web-based platform that helps customers book venues and request for enrollments to courses",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Eloquent",
        color: "green-text-gradient",
      },
      {
        name: "Blade",
        color: "pink-text-gradient",
      },
    ],
    image: edenconsultweb,
    source_code_link: "https://edenconsult.co.tz",
  },
  {
    name: "3D-Shirt desinger",
    description:
      "A web-app that allows users to visually edit their own shirts by adding logos and selecting colors",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: ThreeDShirt,
    source_code_link: "https://threed-shirt-site.onrender.com/",
  },
  {
    name: "Blog Post app",
    description:
      "This ia a cool web application that enables users to create ,manage and view blog posts easily",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Blade",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: blogpost,
    source_code_link: "https://github.com/Chalz20/Blog-Post",
  },
  {
    name: "Student Manager",
    description:
      "Student manager is a web application designed to manage student records efficiently. It allows administrators to easily handle student registration, update profiles.",
    tags: [
      {
        name: "Livewire",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: student,
    source_code_link: "https://github.com/Chalz20/student-management",
  },
];

export { services, technologies, experiences, testimonials, projects };
