import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  //Slider variables
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  //Fetching  data
  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);

  //Date variables from searchbar
  const { dates, options } = useContext(SearchContext);
  console.log(dates);

  //Method to calculate the number of day between 2 dates
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.abs(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  //handle images
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  };

  // Illustration variable
  const hotelImages = [
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  // Slider method
  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex =
        slideNumber === 0 ? hotelImages.length - 1 : slideNumber - 1;
    } else {
      newSlideIndex =
        slideNumber === hotelImages.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="hotel" />

      <div className="lg:flex flex-col gap-4 mt-6 m-8 max-w-screen-xl mx-auto p-4 lg:first-letter:p-0">
        {loading ? (
          "Loading..."
        ) : (
          <>
            {/* Slider */}
            {openSlider && (
              <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-70z-50 flex items-center overflow-hidden">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-pink-600 absolute top-5 right-10 text-3xl cursor-pointer"
                  onClick={() => setOpenSlider(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="text-pink-600 text-3xl absolute left-5 cursor-pointer"
                  onClick={() => handleMove("l")}
                />
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={data.photos[slideNumber]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="text-pink-600 text-3xl absolute right-5 cursor-pointer"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            {/* Hotel information */}
            <div className="lg:flex justify-between gap-2">
              <div className="flex flex-col">
                <h1 className="text-3xl text-pink-600 mb-4">
                  {data.name}
                </h1>
                <div className="flex flex-col gap-2">
                  <span className="text-sm mb-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="mr-2 text-sm"
                    />
                    {data.address}
                  </span>
                  <span className="font-sm text-blue-700">
                    Excellent location - 500m from center
                  </span>
                  <span className="text-pink-600">
                    Book a stay over ${data.cheapestPrice} at this
                    property and get a free airport taxi
                  </span>
                </div>
              </div>
              {/* Button to reserve */}
              <div className="">
                <button className=" bg-pink-500 font-bold text-white rounded-md p-4 my-4 lg:my-0">
                  Reserve or book Now!
                </button>
              </div>
            </div>

            {/* Hotel illustrations */}
            <div className="flex justify-between w-full max-w-screen-xl">
              <div className="flex flex-wrap">
                {data.photos?.map((photo, i) => (
                  <div className="w-1/3 p-1" key={i}>
                    <img
                      src={photo.src}
                      alt=""
                      className="w-full h-full object-cover"
                      onClick={() => handleOpen(i)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel details */}
            <div className="lg:flex w-full max-w-screen-xl gap-2">
              <div className="flex flex-col flex-1 gap-2">
                <h1 className="text-gray-500 font-bold mt-4">
                  {data.title}
                </h1>
                <p className="my-4">{data.desc}</p>
              </div>
              <div className="flex flex-col justify-between lg:w-80 bg-pink-200 p-4 rounded-md">
                <h1 className="text-gray-700">
                  Perfect for a {days} night stay!
                </h1>
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sunt nullas.
                </span>
                <h2 className="text-xl font-bold text-black">
                  <b className="mr-1">
                    ${data.cheapestPrice * days * options.room}
                  </b>
                  ({days} nights)
                </h2>
                <div className="flex justify-center mt-4">
                  <button className="bg-pink-600 text-white p-4 rounded-lg text-sm font-bold w-full lg:w-auto">
                    Reserve or Book Now!
                  </button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Hotel;
