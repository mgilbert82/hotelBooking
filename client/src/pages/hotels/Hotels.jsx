import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const Hotels = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(
    location.state.destination
  );
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="hotel" />
      <div className="flex justify-center lg:mt-10">
        <div className="w-full max-w-screen-xl lg:flex gap-10 m-4">
          {/* Search Component */}
          <div className="flex-3 bg-pink-600 text-white p-4 rounded-md lg:sticky top-5 lg:h-fit">
            <h1 className="text-white my-2 text-3xl">Search</h1>
            <div className="flex flex-col gap-4 p-2 text-sm">
              {/* Destination Input */}
              <div className="flex flex-col gap-1">
                <label>Destination</label>
                <input
                  type="text"
                  placeholder={destination}
                  className="rounded-sm placeholder:py-2 font-light text-md text-gray-400 p-2 cursor-pointer focus:outline-none"
                />
              </div>

              {/* Date Range */}
              <div className="flex flex-col gap-1">
                <label>Check-in date</label>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  type="date"
                  className="flex items-center bg-white rounded-sm placeholder:py-2 font-light text-md text-gray-400 p-2 cursor-pointer focus:outline-none"
                >
                  {`${format(
                    date[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                    className="rounded-sm"
                  />
                )}
              </div>
              {/* Min Price Choice */}
              <div className="flex flex-col gap-1">
                <label className="flex-1">
                  Min Price <small>per night</small>
                </label>
                <input
                  type="number"
                  className="flex items-center bg-white rounded-sm font-light text-md text-gray-400
                  p-2 cursor-pointer focus:outline-none"
                />
              </div>
              {/* Max Price Choice */}
              <div className="flex flex-col gap-1">
                <label className="flex-1">
                  Max Price <small>per night</small>
                </label>
                <input
                  type="number"
                  className="flex items-center bg-white rounded-sm font-light text-md text-gray-400
                  p-2 cursor-pointer focus:outline-none"
                />
              </div>
              {/* Adult choices */}
              <div className="flex items-center gap-1">
                <label className="flex-1">Adult</label>
                <input
                  type="number"
                  className="w-20 flex items-center bg-white rounded-sm font-light text-md
                text-gray-400 p-2 cursor-pointer focus:outline-none"
                  placeholder={options.adult}
                  min={1}
                />
              </div>
              {/* Childrens Choices */}
              <div className="flex items-center gap-1">
                <label className="flex-1">Children</label>
                <input
                  type="number"
                  className="w-20 flex items-center bg-white rounded-sm font-light text-md
                text-gray-400 p-2 cursor-pointer focus:outline-none"
                  placeholder={options.children}
                  min={0}
                />
              </div>

              {/* Room Choices */}
              <div className="flex items-center gap-1">
                <label className="flex-1">Room</label>
                <input
                  type="number"
                  className="w-20 flex items-center bg-white rounded-sm font-light text-md
                text-gray-400 p-2 cursor-pointer focus:outline-none"
                  placeholder={options.room}
                  min={1}
                />
              </div>
            </div>
            <button className="w-80 bg-yellow-400 m-4 p-2 rounded-md text-white">
              Search
            </button>
          </div>
          {/* Search Result */}
          <div className="flex-1 lg:mt-0 mt-4">
            <h1>List Result</h1>
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
