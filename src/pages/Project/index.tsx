import ProjectCard from "../../components/atom/ProjectCard";
import PageWrapper from "../../components/template/PageWrapper";
import { ProjectModel } from "../../models/portfolio.model";
import { portfolioData } from "./data";

const Project = () => {
  const data = {
    title: "Projects",
    subtitle: "Some of my Work",
    projects: portfolioData,
  }

  const handleOnClick = (project: ProjectModel) => {
    if (project.link !== "") {
      window.open(project.link, "_blank");
    }
  }

  return (
    <PageWrapper id="Project" className="font-inter pt-section">
      <div className="flex flex-col items-center justify-center">
        <h1 className="section-title">{data.title}</h1>
        <h2 className="section-subtitle mb-10 lg:mb-14">{data.subtitle}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[1200px] ">
          {data.projects.map((value) => (<ProjectCard key={value.id} onClick={handleOnClick} project={value} />))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Project;