import AppCard from "../../components/atom/AppCard";
import PageWrapper from "../../components/template/PageWrapper";
import { ServiceModel } from "../../models/service.model";
import { serviceData } from "./data";

const Service = () => {
  const data = {
    title: "What I Do",
    subtitle: "My Service",
    services: serviceData
  };

  return (
    <PageWrapper id="Service" className="font-inter mt-10 pt-section">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="section-title">{data.title}</h1>
        <h2 className="section-subtitle mb-10 lg:mb-14">{data.subtitle}</h2>
        <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[1200px]">
          {data.services.map((value, i) => (
            <ServiceCard key={i} service={value} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

const ServiceCard = (props: { service: ServiceModel }) => {
  const { icon, title, description } = props.service;
  return (
    <AppCard className="px-[19px] py-8 rounded-[10px] max-w-sm">
      <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-xl mb-5 dark:bg-white transition-all duration-150">
        <i className={`${icon} text-3xl text-white dark:text-[#3A3A3A] transition-all duration-150`} />
      </div>
      <h3 className="text-xl text-light-title font-semibold mb-2 dark:text-dark-title xl:max-w-[92%]">{title}</h3>
      <p className="text-[#1C1E53] dark:text-dark-body">{description}</p>
    </AppCard>
  );
};

export default Service;