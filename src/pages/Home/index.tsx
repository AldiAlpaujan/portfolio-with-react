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
    <PageWrapper id="Home" className="font-poppins h-screen relative flex items-center justify-center">
      <div className="absolute px-5 flex flex-col items-center justify-center">
        <img src={data.image} alt="Home" className="w-[180px] h-[175px] mb-5 md:mb-6 xl:mb-7 2xl:mb-8 2xl:w-[200px] 2xl:h-[195px]" />
        <h1 className="text-light-title text-3xl font-bold dark:text-dark-title mb-1 md:mb-2 md:text-4xl xl:mb-2 xl:text-5xl">
          {data.title}
        </h1>
        <h2 className="text-xl text-gradient font-semibold mb-4 md:text-2xl xl:mb-5 xl:text-3xl 2xl:mb-6">
          {data.subtitle}
        </h2>
        <p className="max-w-2xl text-base font-medium text-center mb-8 text-light-body dark:text-dark-body md:text-lg md:max-w-3xl lg:max-w-4xl xl:text-xl xl:mb-9">
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