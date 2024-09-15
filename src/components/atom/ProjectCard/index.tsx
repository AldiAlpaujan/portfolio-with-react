import { ProjectModel, ProjectType } from "../../../models/portfolio.model";
import AppCard from "../AppCard";

import flutterIcon from "../../../assets/tech/flutter.png";
import reactIcon from "../../../assets/tech/react_js.png";

const ProjectCard = (props: { project: ProjectModel }) => {
  const {
    image,
    title,
    description,
    tech,
    projectType,
    canTouch
  } = props.project;

  const isMobile = projectType === ProjectType.MOBILE;

  return (
    <AppCard className="flex flex-col justify-between p-5 rounded-[10px] cursor-pointer dark:text-white">
      <div className="mb-[10px]">
        <div className="w-full h-auto bg-red-500 rounded-[4px] overflow-hidden mb-[24px]">
          <img src={image} alt="" />
        </div>
        <h5 className="mb-[8px] text-xl font-bold text-light-title dark:text-white">{title}</h5>
        <p className="text-base dark:text-[#E1E1E1]">{description}</p>
      </div>
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
    </AppCard>
  );
}

export default ProjectCard;