import PageWrapper from "../../components/template/PageWrapper";

const About = () => {
  return (
    <PageWrapper id="About" className="pt-section">
      <div className="flex flex-col items-center justify-center">
        <h1 className="section-title">
          About Me
        </h1>
        <h2 className="section-subtitle">
          Get to know me
        </h2>
      </div>
    </PageWrapper>
  );
};

export default About;