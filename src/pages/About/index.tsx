import { useContext } from "react";
import Button from "../../components/atom/Button";
import PageWrapper from "../../components/template/PageWrapper";
import { HeaderMenuContext } from "../../context/HeaderMenuContext";

const About = () => {
  const { setActiveMenu } = useContext(HeaderMenuContext)!;

  const data = {
    title: "About Me",
    subtitle: "Get to know me",
    text: [
      "Hi there! I'm Aldi Muhamad Alpaujan, a dedicated software developer with a strong focus on mobile app development. My passion lies in creating innovative mobile applications that offer seamless user experiences.",
      "Beyond mobile development, I'am also skilled in building responsive web applications using React and developing powerful backend systems with Express. This combination allows me to provide full-stack solutions that meet your project needs.",
      "Based in Kuningan, West Java, Indonesia, I'am ready to take on new challenges and collaborate with teams worldwide. Whether you're looking for a well-crafted mobile app, a dynamic web application, or a reliable backend system, I'm here to help turn your ideas into reality.",
    ],
  }


  return (
    <PageWrapper id="About" className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 data-aos="fade-up" data-aos-duration="800" className="section-title">{data.title}</h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" className="section-subtitle mb-4 lg:mb-6">{data.subtitle}</h2>
        {data.text.map((e, i) => (
          <p data-aos="fade-up" data-aos-duration={1200 + (i * 200)} key={i} className="section-description mb-4">
            {e}
          </p>
        ))}
        <div data-aos="fade-up" data-aos-duration="1800">
          <Button onClick={() => setActiveMenu("Service")} type="secondary" className="flex gap-2 items-center mt-4">
            My Services
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;