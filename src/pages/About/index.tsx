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
      "Hi there! I'm Aldi Muhamad Alpaujan, an experienced software engineer specializing in frontend development. With over 3 years of experience, I focus on building responsive and dynamic web and mobile applications that deliver exceptional user experiences. I am proficient in modern frameworks such as React, Next.js, and Flutter, allowing me to craft seamless and efficient digital solutions.",
      "Beyond just coding, I am passionate about designing user-centric interfaces and ensuring performance, scalability, and maintainability in every project. This versatility enables me to contribute effectively across the frontend ecosystem while collaborating with diverse teams.",
    ],
  };

  return (
    <PageWrapper
      id="About"
      className="h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="section-title"
        >
          {data.title}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="section-subtitle mb-4 lg:mb-6"
        >
          {data.subtitle}
        </h2>
        {data.text.map((e, i) => (
          <p
            data-aos="fade-up"
            data-aos-duration={1200 + i * 200}
            key={i}
            className="section-description mb-4"
          >
            {e}
          </p>
        ))}
        <div data-aos="fade-up" data-aos-duration="1800">
          <Button
            onClick={() => setActiveMenu("Service")}
            type="secondary"
            className="flex gap-2 items-center mt-4"
          >
            My Services
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
