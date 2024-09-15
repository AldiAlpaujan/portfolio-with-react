import AppCard from "../AppCard";
import { ServiceModel } from "../../../models/service.model";

const ServiceCard = (props: { service: ServiceModel }) => {
  const { icon, title, description } = props.service;
  return (
    <AppCard className="h-full px-[19px] py-8 rounded-[10px] max-w-sm">
      <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-xl mb-5 dark:bg-white transition-all duration-150">
        <i className={`${icon} text-3xl text-white dark:text-[#3A3A3A] transition-all duration-150`} />
      </div>
      <h3 className="text-xl text-light-title font-semibold mb-2 dark:text-dark-title xl:max-w-[92%]">{title}</h3>
      <p className="text-[#1C1E53] dark:text-dark-body">{description}</p>
    </AppCard>
  );
};


export default ServiceCard;