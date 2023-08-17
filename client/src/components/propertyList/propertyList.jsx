import useFetch from "../../hooks/useFetch";
const PropertyList = () => {
  const properties = [
    {
      src: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Villas",
      number: 1253,
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Resort",
      number: 2371,
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Hotel",
      number: 1526,
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Apartment",
      number: 2375,
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Cabin",
      number: 1241,
    },
  ];

  const { data, loading, error } = useFetch(
    "/api/hotels/countByType"
  );
  return (
    <div className="w-full max-w-screen-xl md:flex justify-between gap-6 p-4">
      {/* Property */}
      {loading ? (
        "Loading is running..."
      ) : (
        <>
          {data &&
            properties.map((img, id) => (
              <div
                className="rounded-xl overflow-hidden cursor-pointer flex-1"
                key={id}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-50 object-cover"
                />
                <div className="lg:my-0 my-4">
                  <h1 className="text-center lg:text-left first-letter:uppercase">
                    {data[id]?.type}
                  </h1>
                  <h2 className="text-center lg:text-left">
                    {data[id]?.count} {data[id]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}

      {/* {properties.map((property, i) => (
        <div
          className="rounded-xl overflow-hidden cursor-pointer flex-1"
          key={i}
        >
          <img
            src={property.src}
            alt=""
            className="w-full h-50 object-cover"
          />
          <div className="lg:my-0 my-4">
            <h1 className="text-center lg:text-left">
              {property.title}
            </h1>
            <h2 className="text-center lg:text-left">
              {property.number} hotels
            </h2>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default PropertyList;
