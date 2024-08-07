import { useContext } from "react";
import homeImg from "../../assets/home-img.png";
import Button from "../../components/atom/Button";
import PageWrapper from "../../components/template/PageWrapper";
import { HeaderMenuContext } from "../../context/HeaderMenuContext";

const Home = () => {
  const { setActiveMenu } = useContext(HeaderMenuContext)!;
  const data = {
    image: homeImg,
    title: "Aldi M Alpaujan",
    subtitle: "Mobile Developer",
    description: "I am a Mobile Developer focused on developing applications using Flutter. With expertise in the Dart programming language, I am able to design, build, and maintain high-quality mobile applications for various platforms, including Android.",
    location: "Jawa Barat, Indonesia",
  }

  return (
    <PageWrapper id="Home" className="font-poppins relative flex items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center">
        <img src={data.image} alt="Home" className="w-[180px] h-[175px] mb-5 md:mb-6" />
        <h1 className="text-light-title text-2xl font-bold dark:text-dark-title
          md:mb-1 md:text-3xl xl:mb-2 xl:text-4xl">
          {data.title}
        </h1>
        <h2 className="text-lg text-gradient font-semibold mb-4
          md:text-xl xl:mb-5 xl:text-2xl">
          {data.subtitle}
        </h2>
        <p className="max-w-lg text-sm font-medium text-center text-light-body mb-8 dark:text-dark-body 
          md:text-base md:max-w-xl lg:text-lg lg:max-w-2xl">
          {data.description}
        </p>
        <Button onClick={() => setActiveMenu("About")} type="secondary" className="flex gap-2 items-center">
          More About Me
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Home;