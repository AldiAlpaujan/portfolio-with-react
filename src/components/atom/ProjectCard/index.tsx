import { ProjectModel, ProjectType } from "../../../models/portfolio.model";
import AppCard from "../AppCard";

import flutterIcon from "../../../assets/tech/flutter.png";
import reactIcon from "../../../assets/tech/react_js.png";

type Props = {
  project: ProjectModel
  onClick?: (value: ProjectModel) => void,
}

const ProjectCard = (props: Props) => {

  return (
    <AppCard onClick={() => props.onClick?.(props.project)} className="h-full flex flex-col justify-between p-5 rounded-[10px] cursor-pointer dark:text-white group text-left">
      <Body project={props.project} />
      <Footer project={props.project} />
    </AppCard>
  );
}

const Body = (props: Props) => {
  const {
    image,
    title,
    description,
  } = props.project;

  return (
    <div className="mb-[10px]">
      <div className="w-full mb-[24px] rounded-[4px] overflow-hidden ">
        <img src={image} alt="" />
      </div>
      <h5 className="mb-[8px] text-xl font-bold text-light-title dark:text-white">{title}</h5>
      <p className="text-base dark:text-[#E1E1E1]">{description}</p>
    </div>
  );
}

const Footer = (props: Props) => {
  const {
    tech,
    projectType,
    canTouch
  } = props.project;

  const isMobile = projectType === ProjectType.MOBILE;
  return (
    <>
      <div>
        <p className="mb-5 dark:text-[#CCCCCC]">
          Tech : <span className="text-sm font-light">{tech}</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className={`${isMobile ? "ic-google-play" : "ic-global"} text-lg`} />
            <p className="text-sm underline">
              {
                isMobile ?
                  canTouch ? "Download App" : "Not uploaded yet"
                  : canTouch ? "Live Preview" : "Sorry Can't Visit"
              }
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${isMobile ? "gap-1" : "gap-2"}`}>
              <img src={isMobile ? flutterIcon : reactIcon} alt="tech" className="size-6" />
              <p className="text-sm underline">{isMobile ? "Flutter" : "React js"} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;