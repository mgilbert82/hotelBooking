import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faSearch,
  faTaxi,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState(" ");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="flex justify-center bg-blue-400 text-white sm:p-4">
      <div
        className={`mt-5 w-full max-w-screen-xl relative ${
          type == "hotel" ? "mb-4" : "mb-10"
        }`}
      >
        {/* Buttons */}
        <div className="lg:flex gap-6 text-lg pb-5 m-6 lg:m-0">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2 border-2 border-white p-2 rounded-xl">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>{" "}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>{" "}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTrain} />
            <span>Train</span>
          </div>
        </div>

        {type !== "hotel" && (
          <div className="lg:m-0 m-4">
            {/* Title */}
            <h1 className="text-yellow-300 font-bold text-5xl">
              Best offers 2023 summer ☀️
            </h1>
            {/* Description */}
            <p className="mt-4 text-md font-semibold">
              Summer lover, long sunny days are the perfect
              opportunity to have fun, relax and create new memories.
            </p>
            {/* Call to action */}
            <button className="bg-pink-500 p-2 rounded-lg my-6 w-full lg:w-auto">
              Sign in / Register{" "}
            </button>

            {/* Parameter section */}
            <div
              className="lg:flex justify-around
            align-center border-2 border-yellow-300 bg-white rounded-lg px-2 py-4 gap-2 lg:absolute -bottom-50 w-full
            max-w-screen-xl p-4"
            >
              {/* Search section */}
              <div className="flex items-center bg-gray-200 p-2 rounded-lg text-blue-500 m-2 lg:m-0">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="me-2 text-blue-500"
                />
                <input
                  type="text"
                  className="placeholder:text-blue-500 bg-gray-200 border-0 outline-none cursor-pointer"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/* End of search section */}

              {/* Calendar section */}
              <div className="bg-gray-200 p-2 rounded-lg text-blue-500 flex items-center z-10 m-2 lg:m-0">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="me-2 text-blue-500"
                />
                <span
                  className="placeholder:text-blue-500 cursor-pointer"
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(
                    date[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="lg:absolute lg:top-20"
                  />
                )}
              </div>
              {/* End of calendar section */}

              {/* Person section */}
              <div className="bg-gray-200 p-2 rounded-lg text-blue-500 cursor-pointer z-10 m-2 lg:m-0">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="me-2 text-blue-500"
                />
                <span
                  className="placeholder:text-blue-500"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >
                  {`${options.adult} adult • ${options.children} children • room ${options.room}`}
                </span>
                {/* Options sections */}
                {openOptions && (
                  <div className="absolute top-50 bg-gray-200 p-3 rounded-md shadow-md">
                    {/* Adult parameter */}
                    <div className="flex justify-between items-center gap-2">
                      <span>Adult</span>
                      <div className="flex items-center m-2 text-sm">
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                    cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 0}
                        >
                          -
                        </button>
                        <span className="mx-4">{options.adult}</span>
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                    cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Children parameter */}
                    <div className="flex justify-between items-center gap-2">
                      <span>Children</span>
                      <div className="flex items-center m-2 text-sm">
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                  cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() =>
                            handleOption("children", "d")
                          }
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="mx-4">
                          {options.children}
                        </span>
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                    cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() =>
                            handleOption("children", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Room parameter */}
                    <div className="flex justify-between items-center gap-2">
                      <span>Room</span>
                      <div className="flex items-center m-2 text-sm">
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                    cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 0}
                        >
                          -
                        </button>
                        <span className="mx-4">{options.room}</span>
                        <button
                          className="bg-pink-500 text-white rounded-full w-6 h-6 font-bold text-md px-1
                    cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* End of options section */}
              </div>
              {/* End of person section */}

              {/* Button section */}
              <div className="flex items-center justify-end m-2">
                <button
                  className="bg-pink-500 text-white p-1 px-4 rounded-md"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  type: String,
};

export default Header;
