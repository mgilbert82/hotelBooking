import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Best Hotel in country",
      distance: 124,
      freeOptions: "Free airport taxi",
      hotelOptions: "Hotel with Air conditioning",
      hotelDetails: "Entire hotel, 1 bathroom and 35m2 full bed",
      price: 353,
      rating: 8.9,
      ratingText: "Excellent",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "In the middle of nowhere",
      distance: 234,
      freeOptions: "Free lunch",
      hotelOptions: "Hotel with Air conditioning",
      hotelDetails:
        "Entire apartement, 1 private jacuzzi and full bed ",
      price: 213,
      rating: 8.3,
      ratingText: "Excellent",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Awesome place to awesome people",
      distance: 314,
      freeOptions: "Free airport taxi",
      hotelOptions: "Hotel with Air conditioning",
      hotelDetails: "Entire hotel, 1 bathroom and 35m2 full bed",
      price: 353,
      rating: 8.9,
      ratingText: "Excellent",
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "The roof top hotel",
      distance: 124,
      freeOptions: "Free airport taxi",
      hotelOptions: "Hotel with Air conditioning",
      hotelDetails: "Entire hotel, 1 bathroom and 35m2 full bed",
      price: 353,
      rating: 8.9,
      ratingText: "Excellent",
    },
  ];

  return (
    <>
      <div className="border-2 border-gray-200 lg:flex justify-between gap-4 rounded-md p-4 mt-4">
        <img
          src={item.photo}
          alt=""
          className="lg:w-60 h-80 object-cover rounded-md"
        />
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="text-pink-600 text-3xl lg:my-0 my-4 text-center lg:text-left">
            {item.name}
          </h1>
          <span className="text-sm text-blue-500 my-2 lg:my-0">
            {item.distance}m from center
          </span>
          <span className="bg-yellow-300 p-2 rounded-md text-blue-600 lg:w-1/2 text-center my-2 lg:my-0">
            Free airport hotel travel
          </span>
          <span className="text-black font-bold my-2 lg:my-0">
            Studio Apartment with Air conditioning
          </span>
          <span className="my-2 lg:my-0">{item.desc}</span>
          <span className="text-blue-600 font-semibold">
            Free cancellation
          </span>
          <p className="text-blue-600 font-light text-sm">
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div className="lg:flex flex-2 mt-4 lg:mt-0">
          <div className="flex flex-col justify-between">
            {item.rating && (
              <div className="flex justify-between">
                <span className="font-semibold text-md">
                  {item.ratingText}
                </span>
                <button className="bg-pink-600 text-white rounded-full p-1 text-sm">
                  {item.rating}
                </button>
              </div>
            )}
            <div className="flex flex-col text-right gap-2 mt-4 lg:mt-0">
              <span className="text-3xl font-bold text-blue-500">
                ${item.cheapestPrice}
              </span>
              <span className="text-sm text-gray-400">
                Includes taxes and fees
              </span>
              <Link to={`/hotel/${item._id}`}>
                <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">
                  See availability
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
