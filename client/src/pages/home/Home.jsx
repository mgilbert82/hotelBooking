import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/propertyList";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="lg:mt-20 flex flex-col gap-4 justify-center items-center">
        <Featured />
        <h1 className="max-w-screen-xl w-full my-2 text-center lg:text-left">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="max-w-screen-xl w-full my-2 text-center lg:text-left">
          Homes guests love
        </h1>
        <FeaturedProperties />
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
