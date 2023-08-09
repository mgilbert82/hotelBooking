const Footer = () => {
  const places = [
    { title: "Countries" },
    { title: "Regions" },
    { title: "Cities" },
    { title: "Districts" },
    { title: "Airports" },
    { title: "Hotels" },
    { title: "Place of interest" },
  ];
  const housings = [
    { title: "Homes" },
    { title: "Apartments" },
    { title: "Resorts" },
    { title: "Villas" },
    { title: "Hostels" },
    { title: "B&Bs" },
    { title: "Guest Houses" },
  ];
  const categories = [
    { title: "Unique place to stay" },
    { title: "All destinations" },
    { title: "Discover" },
    { title: "Reviews" },
    { title: "Unlocked Travel articles" },
    { title: "Travel communities" },
    { title: "Seasonal and holidays deals" },
  ];
  const services = [
    { title: "Car rental" },
    { title: "Flight finder" },
    { title: "Restaurant reservation" },
    { title: "HotelBooking.com for Travel Agents" },
  ];
  const resources = [
    { title: "Coronavirus (COVID-19) FAQs" },
    { title: "About hotelBooking.com" },
    { title: "Customer Service Help" },
    { title: "HotelBooking.com for Travel Agents" },
    { title: "Partner Help" },
    { title: "Careers" },
    { title: "Sustainability" },
    { title: "Press center" },
    { title: "Safety Resource center" },
  ];

  return (
    <div className="lg:flex items-center gap-2 text-xs flex-col pt-4 p-4">
      <div className="lg:flex justify-between gap-4 m-4 w-full">
        {/* Places */}
        <ul>
          {places.map((place, id) => (
            <li
              className="mb-2 cursor-pointer text-blue-500"
              key={id}
            >
              {place.title}
            </li>
          ))}
        </ul>
        {/* Housings */}
        <ul>
          {housings.map((housing, id) => (
            <li
              className="mb-2 cursor-pointer text-blue-500"
              key={id}
            >
              {housing.title}
            </li>
          ))}
        </ul>
        {/* Categories */}
        <ul>
          {categories.map((category, id) => (
            <li
              className="mb-2 cursor-pointer text-blue-500"
              key={id}
            >
              {category.title}
            </li>
          ))}
        </ul>
        {/* Services */}
        <ul>
          {services.map((service, id) => (
            <li
              className="mb-2 cursor-pointer text-blue-500"
              key={id}
            >
              {service.title}
            </li>
          ))}
        </ul>
        {/* Resources */}
        <ul>
          {resources.map((resource, id) => (
            <li
              className="mb-2 cursor-pointer text-blue-500"
              key={id}
            >
              {resource.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center my-4">
        Copyright © 2023 Treblig.fr
      </div>
    </div>
  );
};

export default Footer;
