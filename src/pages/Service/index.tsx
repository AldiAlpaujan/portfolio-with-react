import ServiceCard from "../../components/atom/ServiceCard";
import PageWrapper from "../../components/template/PageWrapper";
import { serviceData } from "./data";

// image
import dart from '../../assets/tech/dart.png';
import express_js from '../../assets/tech/express_js.png';
import firebase from '../../assets/tech/firebase.png';
import flutter from '../../assets/tech/flutter.png';
import git from '../../assets/tech/git.png';
import material_ui from '../../assets/tech/material_ui.png';
import mysql from '../../assets/tech/mysql.png';
import react_js from '../../assets/tech/react_js.png';
import tailwind_css from '../../assets/tech/tailwind_css.png';
import typescript from '../../assets/tech/typescript.png';
import AppCard from "../../components/atom/AppCard";


const Service = () => {
  const data = {
    title: "What I Do",
    subtitle: "My Service",
    services: serviceData,
    techs: [
      flutter,
      dart,
      firebase,
      react_js,
      express_js,
      typescript,
      mysql,
      material_ui,
      tailwind_css,
      git,
    ],
  };

  return (
    <PageWrapper id="Service" className="font-inter h-fit pt-section">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="section-title">{data.title}</h1>
        <h2 className="section-subtitle mb-10 lg:mb-14">{data.subtitle}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[1200px] mb-6">
          {data.services.map((value, i) => (
            <ServiceCard key={i} service={value} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 xl:max-w-[1200px]">
          {data.techs.map((value, i) => (
            <AppCard key={i} className="w-32 h-32 sm:w-24 sm:h-24 xl:w-32 xl:h-32 flex items-center justify-center rounded-[10px] group">
              <img src={value} alt="img" className="w-20 sm:w-16 xl:w-20 group-hover:saturate-100 transition-all duration-300" />
            </AppCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};


export default Service;