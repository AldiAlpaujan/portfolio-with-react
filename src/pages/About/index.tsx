import PageWrapper from "../../components/template/PageWrapper";

const About = () => {
  const data = {
    title: "About Me",
    subtitle: "Get to know me",
    text: [
      "Hi there! I'm Aldi Muhamad Alpaujan, a dedicated software developer with a strong focus on mobile app development. My passion lies in creating innovative mobile applications that offer seamless user experiences.",
      "Beyond mobile development, I'am also skilled in building responsive web applications using React and developing powerful backend systems with Express. This combination allows me to provide full-stack solutions that meet your project needs.",
      "Based in Kuningan, West Java, Indonesia, I'am ready to take on new challenges and collaborate with teams worldwide. Whether you're looking for a well-crafted mobile app, a dynamic web application, or a reliable backend system, I'm here to help turn your ideas into reality.",
    ],
  }

  const socialMedia = [
    {
      "icon": "ic-whatsapp",
      "title": "WhatsApp",
    },
    {
      "icon": "ic-instagram",
      "title": "Instagram",
    },
    {
      "icon": "ic-github",
      "title": "Github",
    },
    {
      "icon": "ic-linkedin",
      "title": "LinkedIn",
    },
  ];

  return (
    <PageWrapper id="About" className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="section-title">{data.title}</h1>
        <h2 className="section-subtitle mb-4 lg:mb-6">{data.subtitle}</h2>
        {data.text.map((e, i) => (
          <p key={i} className="section-description mb-4">
            {e}
          </p>
        ))}
        <div className="flex gap-4 mt-2">
          {socialMedia.map((v, i) => (
            <div key={i} className="cursor-pointer flex items-center gap-2 group">
              <i className={`${v.icon} text-light-body text-[42px] dark:text-dark-body group-hover:text-primary transition-all duration-300`} />
              <div className="w-0 group-hover:w-[80px] transition-all duration-150">
                <p className="hidden group-hover:block">
                  {v.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;