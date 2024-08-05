import homeImg from "../../assets/home-img.png";
import Button from "../../components/atom/Button";
import PageWrapper from "../../components/template/PageWrapper";

const Home = () => {
  const data = {
    image: homeImg,
    title: "Aldi M Alpaujan",
    subtitle: "Mobile Developer",
    description: "I am a Mobile Developer focused on developing applications using Flutter. With expertise in the Dart programming language, I am able to design, build, and maintain high-quality mobile applications for various platforms, including Android.",
  }

  return (
    <PageWrapper id="Home" className="font-poppins flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src={data.image} alt="Home" className="w-[180px] h-[175px] mb-5" />
        <h1 className="text-light-title text-2xl font-bold dark:text-dark-title">
          {data.title}
        </h1>
        <h2 className="text-lg text-gradient font-semibold mb-4">
          {data.subtitle}
        </h2>
        <p className="text-sm font-medium text-center text-light-body mb-8 dark:text-dark-body ">
          {data.description}
        </p>
        <Button type="secondary">
          Download CV
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Home;