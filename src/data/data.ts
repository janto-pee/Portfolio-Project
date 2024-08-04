import {
    ChartPieIcon,
    BuildingOfficeIcon,
    BuildingLibraryIcon,
    BoltIcon,
    PencilIcon,
    CalendarDaysIcon,
  } from "@heroicons/react/24/outline";
  
  import img1 from "../assets/1.jpg";
  import img2 from "../assets/2.jpg";
  import img3 from "../assets/3.jpg";
  
  import portfolioImg1 from "../assets/portfolio/1.jpg";
  import portfolioImg2 from "../assets/portfolio/2.jpg";
  import portfolioImg3 from "../assets/portfolio/3.jpg";
  import portfolioImg4 from "../assets/portfolio/4.jpg";
  import portfolioImg5 from "../assets/portfolio/5.jpg";
  import portfolioImg6 from "../assets/portfolio/6.jpg";
  
  import blogImg1 from "../assets/blog/blog-4.jpg";
  import blogImg2 from "../assets/blog/blog-5.jpg";
  import blogImg3 from "../assets/blog/blog-6.jpg";
  
  export interface NavbarInterface {
    name: string;
    href: string;
  }
  export const navbar: NavbarInterface[] = [
    { name: "home", href: "/" },
    { name: "skills", href: "#skills" },
    { name: "portfolio", href: "#portfolio" },
    { name: "resume", href: "#resume" },
    { name: "testimonial", href: "#testimonial" },
    { name: "blog", href: "#blog" },
    { name: "others", href: "#footer" },
  ];
  export interface navigationInterface {
    solutions: {
      name: string;
      href: string;
    }[];
    support: {
      name: string;
      href: string;
      info?: string;
    }[];
    socials: {
      name: string;
      href: string;
      info?: string;
    }[];
  }
  
  export const navigation: navigationInterface = {
    solutions: [
      { name: "Marketing", href: "/" },
      { name: "Analytics", href: "/" },
      { name: "Commerce", href: "/" },
      { name: "Insights", href: "/" },
    ],
    support: [
      { name: "Pricing", href: "/" },
      { name: "Documentation", href: "/" },
      { name: "Careers", href: "/", info: " We're hiring" },
      { name: "API Status", href: "/" },
    ],
    socials: [
      { name: "facebook", href: "/", info: "/social/facebook.svg" },
      { name: "twitter", href: "/", info: "/social/twitter.svg" },
      { name: "github", href: "/", info: "/social/github.svg" },
      { name: "slack", href: "/", info: "/social/slack.svg" },
    ],
  };
  
  export interface skillsListInterface {
    id: number;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    content: string;
  }
  export const SkillsList: skillsListInterface[] = [
    {
      id: 1,
      icon: ChartPieIcon,
      title: "Frontend",
      content:
        " specializes in creating and designing the user interface (UI) and user experience (UX) of websites",
    },
    {
      id: 2,
      icon: BuildingOfficeIcon,
      title: "Backend",
      content:
        "build and maintain the server-side logic, databases, and other components of a website",
    },
    {
      id: 3,
      icon: BuildingLibraryIcon,
      title: "Containerization",
      content:
        "build standardized packages where components of an app are bundled into a single container image ",
    },
    {
      id: 4,
      icon: BoltIcon,
      title: "CI/CD",
      content:
        "Build CI/CD pipeline that automates the entire software delivery process from build to deployment",
    },
    {
      id: 5,
      icon: PencilIcon,
      title: "Iac",
      content:
        "Use Terraform to provision your computing infrastructure instead of manual processes",
    },
    {
      id: 6,
      icon: CalendarDaysIcon,
      title: "Cloud",
      content:
        "use services such as AWS & Azure for the delivery of hosted computing services over the internet",
    },
  ];
  
  export interface TestimonialCardInterface {
    userImage: string;
    userCompany: string;
    userPosition: string;
    userName: string;
    id: number;
    image: string;
    title: string;
    subtitle: string;
    rating: number;
    comment: string;
  }
  
  export const TestimonialList: TestimonialCardInterface[] = [
    {
      userImage: "/avatar/Image-2.png",
      userCompany: "Startup Camp",
      userPosition: "Vice President Engineering",
      userName: "Betty Hakimi",
      id: 1,
      image: img1,
      title: "Android App Development",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
    {
      userImage: "/avatar/Image-1.png",
      userCompany: "Edupedia AI",
      userPosition: "Principal Engineer",
      userName: "Bryan John",
      id: 1,
      image: img2,
      title: "DevOps Engineer",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
    {
      userImage: "/avatar/Image-3.png",
      userCompany: "Startup Camp",
      userPosition: "Vice President Engineering",
      userName: "Nike Adele",
      id: 1,
      image: img3,
      title: "Android App Development",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
  ];
  
  export interface PortfolioInterface {
    id: number;
    image: string;
    title: string;
    views: number;
    stack: string;
    link: string;
  }
  export const Portfoio: PortfolioInterface[] = [
    {
      id: 1,
      image: portfolioImg1,
      title: "Business Stratagy I throw my self down",
      views: 20,
      stack: "Frontend",
      link: "https://github.com/janto-pee",
    },
    {
      id: 2,
      image: portfolioImg2,
      title: "App Development Lorem, ipsum dolor",
      views: 20,
      stack: "Backend",
      link: "https://github.com/janto-pee",
    },
    {
      id: 3,
      image: portfolioImg3,
      title: "Business Stratagy orem, ipsum lor od",
      views: 20,
      stack: "CICD",
      link: "https://github.com/janto-pee",
    },
    {
      id: 4,
      image: portfolioImg4,
      title: "Mobile App L consec tetur sicing",
      views: 20,
      stack: "IaC",
      link: "https://github.com/janto-pee",
    },
    {
      id: 5,
      image: portfolioImg5,
      title: "SEO Optimisation ectetur adip elit re",
      views: 20,
      stack: "Containers",
      link: "https://github.com/janto-pee",
    },
    {
      id: 6,
      image: portfolioImg6,
      title: "UX Consulting velit andae debitis",
      views: 20,
      stack: "cloud",
      link: "https://github.com/janto-pee",
    },
  ];
  
  export const BlogList: PortfolioInterface[] = [
    {
      id: 1,
      image: blogImg1,
      title: "Business Stratagy I throw my self down",
      views: 20,
      stack: "Frontend",
      link: "/",
    },
    {
      id: 2,
      image: blogImg2,
      title: "App Development Lorem, ipsum dolor",
      views: 20,
      stack: "Backend",
      link: "/",
    },
    {
      id: 3,
      image: blogImg3,
      title: "Business Stratagy orem, ipsum lor od",
      views: 20,
      stack: "CICD",
      link: "/",
    },
    {
      id: 4,
      image: blogImg2,
      title: "Mobile App L consec tetur sicing",
      views: 20,
      stack: "IaC",
      link: "/",
    },
    {
      id: 5,
      image: blogImg1,
      title: "SEO Optimisation ectetur adip elit re",
      views: 20,
      stack: "Containers",
      link: "/",
    },
    {
      id: 6,
      image: blogImg3,
      title: "UX Consulting velit andae debitis",
      views: 20,
      stack: "cloud",
      link: "/",
    },
  ];