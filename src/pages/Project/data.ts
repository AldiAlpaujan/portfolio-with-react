import { ProjectModel, ProjectType } from "../../models/portfolio.model";
import portfolioImg from "../../assets/project/portfolio.png";
import balaneKeeperImg from "../../assets/project/balance-keeper.png";
import balaneKeeperCmsImg from "../../assets/project/balance-keeper-cms.png";
import kbihuImg from "../../assets/project/kbihu.png";
import ehyaImg from "../../assets/project/ehya.png";
import minimarketkuImg from "../../assets/project/minimarketku.png";
import dbOwnerImg from "../../assets/project/db-owner.png";
import pdtMaxImg from "../../assets/project/pdt-max.png";
import rzfCanvasingImg from "../../assets/project/rzf-canvasing.png";
import rzfRestoImg from "../../assets/project/rzf-resto.png";

const projectData: ProjectModel[] = [
  {
    id: 1,
    image: portfolioImg,
    title: 'My Portfolio',
    description: 'My web portfolio is a website I created to showcase my skills, expertise, and past projects, aimed at attracting potential clients.',
    tech: 'React js, Typescript, Tailwind css.',
    projectType: ProjectType.WEB,
    canTouch: true,
    link: "https://aldi-portfolio.vercel.app/",
  },
  {
    id: 2,
    image: balaneKeeperImg,
    title: 'Balance Keeper Application',
    description: 'Balance Keeper is a personal finance app designed to track your expenses and manage your assets with ease. Stay in control of your financial health effortlessly.',
    tech: 'Flutter, Dart, Sqlite, Firebase.',
    projectType: ProjectType.MOBILE,
    canTouch: false,
    link: "",
  },
  {
    id: 3,
    image: balaneKeeperCmsImg,
    title: 'Balance Keeper CMS',
    description: 'Balance Keeper CMS is an internal application designed to manage the Balance Keeper app and landing page content, as well as analyze data efficiently.',
    tech: 'React js, Typescript, MUI, Express js, Prisma Mysql.',
    projectType: ProjectType.WEB,
    canTouch: false,
    link: "",
  },
  {
    id: 4,
    image: kbihuImg,
    title: 'KBIHU Daarul Istiqoomah',
    description: 'KBIHU Darulistiqomah is a management app designed to let customers independently register, save, join training programs, and check their estimated departure year.',
    tech: 'Flutter, Dart, Firebase.',
    projectType: ProjectType.MOBILE,
    canTouch: true,
    link: "https://play.google.com/store/apps/details?id=com.di.kbihu&pcampaignid=web_share",
  },
  {
    id: 5,
    image: ehyaImg,
    title: 'Ehya Blog',
    description: "Ehya Blog is a personal blog website I created to enhance and sharpen my React.js skills. It's a space where practice meets creativity.",
    tech: 'React js, typescript, tailwind css.',
    projectType: ProjectType.WEB,
    canTouch: true,
    link: "https://clone-ehya-blog-react.vercel.app/",
  },
  {
    id: 6,
    image: minimarketkuImg,
    title: 'Minimarketku',
    description: 'Minimarketku is an e-commerce app project that offers the convenience of purchasing items from home without the need to visit the main store.',
    tech: 'Flutter, Dart, Firebase.',
    projectType: ProjectType.MOBILE,
    canTouch: false,
    link: "",
  },
  {
    id: 7,
    image: dbOwnerImg,
    title: 'DB Owner',
    description: 'DB Owner is a powerful app designed to view and analyze data from internal desktop applications subscribed to company.',
    tech: 'Flutter, Dart.',
    projectType: ProjectType.MOBILE,
    canTouch: true,
    link: "https://play.google.com/store/apps/details?id=com.rzfsoftware.dashboard_owner&pcampaignid=web_share",
  },
  {
    id: 8,
    image: pdtMaxImg,
    title: 'PDT Max',
    description: "PDT Max is a stock-taking and management app for retail stores, featuring seamless integration with the company's desktop application.",
    tech: 'Flutter, Dart, Sqlite, Firebase',
    projectType: ProjectType.MOBILE,
    canTouch: true,
    link: "https://play.google.com/store/apps/details?id=com.rzfsoftware.pdt_mobile&pcampaignid=web_share",
  },
  {
    id: 9,
    image: rzfCanvasingImg,
    title: 'RZF Canvasing',
    description: "RZF Canvasing is a sales support app designed to assist salespeople and cashiers in making transactions outside the store, seamlessly connected to the company's desktop application.",
    tech: 'Flutter, Dart.',
    projectType: ProjectType.MOBILE,
    canTouch: false,
    link: "",
  },
  {
    id: 10,
    image: rzfRestoImg,
    title: 'RZF Resto',
    description: 'RZF Resto is a POS app specifically designed for restaurants and cafes, seamlessly connected to a web application for streamlined management.',
    tech: 'Flutter, Dart, Firebase.',
    projectType: ProjectType.MOBILE,
    canTouch: false,
    link: "",
  },

];

export { projectData as portfolioData }