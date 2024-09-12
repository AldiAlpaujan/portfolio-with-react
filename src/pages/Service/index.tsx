import ServiceCard from "../../components/atom/ServiceCard";
import PageWrapper from "../../components/template/PageWrapper";
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


export default Service;