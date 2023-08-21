import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const guestLoves = [
    {
      title: "Aparthotel Milano Piare",
      destination: "Milano",
      src: "https://images.unsplash.com/photo-1587685780550-2cc6257fb829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 139,
      rating: 8.9,
      ratingText: "Excellent",
    },
    {
      title: "Cabin top of the roof",
      destination: "Swiss",
      src: "https://images.unsplash.com/photo-1607585011081-241d2bacb7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 439,
      rating: 9.1,
      ratingText: "Awesome",
    },
    {
      title: "Hotel St Pierre",
      destination: "Florence",
      src: "https://images.unsplash.com/photo-1585595751864-6e56dbd53658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: 235,
      rating: 8.6,
      ratingText: "Excellent",
    },
    {
      title: "Aparthotel center of Paris",
      destination: "Paris",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      price: 229,
      rating: 8.5,
      ratingText: "Excellent",
    },
  ];

  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true"
  );

  //console.log(data);
  return (
    <div className="w-full max-w-screen-xl md:flex justify-between gap-6">
      {loading
        ? "Loading in progress..."
        : data.map((item) => (
            <div
              className="rounded-xl overflow-hidden cursor-pointer flex-1 gap-2 flex flex-col m-4"
              key={item._id}
            >
              <img
                src={item.photos[0]}
                alt=""
                className="w-full h-50 object-cover"
              />
              <span className="text-lg font-semibold">
                {item.name}
              </span>
              <span className="text-lg font-medium">{item.city}</span>
              <span className="text-lg font-light">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="flex items-center gap-2 ">
                  <button className="rounded-3xl text-white bg-pink-600 p-1 text-xs border-2 border-pink-600">
                    {item.ratingNumber}
                  </button>
                  <span className="text-sm font-normal">
                    {item.ratingText}
                  </span>
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default FeaturedProperties;
