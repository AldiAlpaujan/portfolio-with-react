import PageWrapper from "../../components/template/PageWrapper";

const Contact = () => {
  const icons = [
    {
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=aldi.m.alpaujan.2@gmail.com",
      icon: "ic-email"
    },
    {
      link: "https://www.linkedin.com/in/aldi-m-alpaujan-a265b426a/",
      icon: "ic-linkedin"
    },
    {
      link: "https://wa.me/6285156496541",
      icon: "ic-whatsapp"
    },
    {
      link: "https://www.instagram.com/aldialpaujan",
      icon: "ic-instagram"
    },
    {
      link: "https://github.com/AldiAlpaujan",
      icon: "ic-github"
    },
  ]
  return (
    <PageWrapper id="Contact" className="h-screen pt-section flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="section-title">
          Get In Touch
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="section-subtitle mb-4 lg:mb-6">
          Lets work together
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="font-inter max-w-2xl text-sm font-medium text-center text-light-body dark:text-dark-body
        md:text-base md:max-w-3xl lg:text-lg">
          Ready to take the next step? Don't hesitate to reach out if you're looking for a developer, have questions, or want to share ideas. I would be happy to hear from you through the platforms below.
        </p>
        <div className="flex justify-center items-center gap-3 mt-4 lg:mt-7">
          {icons.map((v, i) => (
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" key={i} className="relative group">
              <a href={v.link} target="_blank" className="flex items-center">
                <i className={`${v.icon} text-3xl text-light-body dark:text-dark-body md:text-4xl 2xl:text-[40px]`} />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                  {v.icon.replace('ic-', '')}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;