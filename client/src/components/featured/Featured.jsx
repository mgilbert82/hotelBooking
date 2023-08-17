import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=Paris,Californie,Mexico"
  );
  //console.log(data);

  const countryPhotos = [
    {
      src: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
      title: "Japan",
      number: 345,
    },
    {
      src: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80",

      title: "USA",
      number: 237,
    },
    {
      src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
      title: "Africa",
      number: 183,
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      title: "India",
      number: 545,
    },
  ];
  return (
    <div className="w-full max-w-screen-xl md:flex justify-between gap-2 z-0 lg:-p-0">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="relative text-white overflow-hidden rounded-lg flex-1">
            <img
              src="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80"
              className="p-4 lg:p-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-10">
              <h1 className="m-2">Californie</h1>
              <h2 className="m-2">{data[0]} hotels</h2>
            </div>
          </div>
          <div className="relative text-white overflow-hidden rounded-lg flex-1">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
              className="p-4 lg:p-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-10">
              <h1 className="m-2">France</h1>
              <h2 className="m-2">{data[1]} hotels</h2>
            </div>
          </div>
          <div className="relative text-white overflow-hidden rounded-lg flex-1">
            <img
              src="https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              className="p-4 lg:p-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-10">
              <h1 className="m-2">Mexico</h1>
              <h2 className="m-2">{data[2]} hotels</h2>
            </div>
          </div>
          {/* {countryPhotos.map((countryPhoto, i) => (
            <div
              className="relative text-white overflow-hidden rounded-lg flex-1"
              key={i}
            >
              <img
                src={countryPhoto.src}
                className="p-4 lg:p-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-10">
                <h1 className="m-2">{countryPhoto.title}</h1>
                <h2 className="m-2">{countryPhoto.number} hotels</h2>
              </div>
            </div>
          ))} */}
        </>
      )}
    </div>
  );
};

export default Featured;
