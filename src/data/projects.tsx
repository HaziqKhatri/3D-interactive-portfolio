import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. sample{
  id: "helenchapmanphotography",
  category: "Website",
  title: "Helen Chapman Photography",
  src: "/assets/demo/Helan/2.png",
  screenshots: ["1.png", "2.png"],
  live: "https://helenchapmanphotography.co.nz/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Helen Chapman Photography showcases stunning wedding, portrait, and event photography. 
          The site highlights her portfolio, client stories, and photography packages, 
          creating an elegant and personal experience for visitors.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Helan/1.png`,
            `/assets/demo/Helan/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "victorybaptistchurch",
  category: "Website",
  title: "Victory Baptist Church",
  src: "/assets/demo/Church/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://victorybaptistchurch.co.nz/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Victory Baptist Church is a welcoming community that shares Christian teachings, 
          live sermons, events, and outreach programs. The website provides information 
          about services, ministries, and ways to get connected.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Church/1.png`,
            `/assets/demo/Church/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "nma",
  category: "Website",
  title: "NMA",
  src: "/assets/demo/nma/1.png",
  screenshots: ["1.png", "2.png"],
  live: "http://nma.org.nz/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          The National Museum of Afghanistan (New Zealand branch) preserves and promotes 
          Afghan heritage through exhibitions, cultural programs, and educational resources. 
          The website shares history, events, and opportunities to support the museum’s mission.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/NMA/1.png`,
            `/assets/demo/NMA/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "pakchinamart",
  category: "E-Commerce",
  title: "Pak China Mart",
  src: "/assets/demo/PKCM/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://pakchinamart.com/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Pak China Mart is an online store offering a wide variety of products ranging from 
          electronics and fashion to household items. The platform ensures affordable prices, 
          reliable delivery, and convenient online shopping.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/PKCM/1.png`,
            `/assets/demo/PKCM/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "zawadi",
  category: "E-Commerce",
  title: "Zawadi Kenya",
  src: "/assets/demo/Zawadi/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://zawadi.co.ke/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Zawadi is an online gift shop in Kenya offering curated collections of 
          personalized and unique gifts. Customers can browse categories such as 
          flowers, hampers, accessories, and more, with easy ordering and delivery.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Zawadi/1.png`,
            `/assets/demo/Zawadi/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "oserth",
  category: "Website",
  title: "Oserth",
  src: "/assets/demo/Oserth/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://oserth.e8demo.com/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Oserth is a business platform demo showcasing modern website design and 
          professional branding. It provides sections for services, portfolio, 
          testimonials, and contact to highlight company offerings.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Oserth/1.png`,
            `/assets/demo/Oserth/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "ccme",
  category: "Website",
  title: "CCME News",
  src: "/assets/demo/CCME/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://ccme.news/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          CCME News is an online news portal delivering timely updates on politics, 
          society, economy, and global issues. The site presents articles, opinion 
          pieces, and multimedia content for readers worldwide.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/CCME/1.png`,
            `/assets/demo/CCME/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "fusionfragrance",
  category: "E-Commerce",
  title: "Fusion Fragrance",
  src: "/assets/demo/Fusion/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://fusionfragrance.pk/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Fusion Fragrance is an online store specializing in premium perfumes and 
          fragrance collections. The website features a wide variety of international 
          brands with secure online shopping and delivery across Pakistan.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Fusion/1.png`,
            `/assets/demo/Fusion/2.png`,
          ]}
        />
      </div>
    );
  },
},

{
  id: "hairandmakeupaustralia",
  category: "Website",
  title: "Hair & Makeup Australia",
  src: "/assets/demo/Hair/1.png",
  screenshots: ["1.png", "2.png"],
  live: "https://hairandmakeupaustralia.com.au/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Hair and Makeup Australia offers professional beauty services for weddings, 
          events, and special occasions. The site showcases service packages, client 
          galleries, and booking options for a seamless customer experience.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Hair/1.png`,
            `/assets/demo/Hair/2.png`,
          ]}
        />
      </div>
    );
  },
},

  
];
export default projects;
