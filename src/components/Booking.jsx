import React, { useState } from "react";
import AnimButton from "./AnimButton";

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState('oneWay');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-500 to-yellow-500 mt-[80px] py-[150px]">
      <div className="w-3/6 bg-white rounded-2xl p-5 m-lg:w-full m-lg:mx-2">
        <div className="flex gap-5">
          <div className="flex gap-2 items-center cursor-pointer">
          <input
              type="radio"
              id="oneWay"
              name="bookingOption"
              className='w-[20px] h-[20px] cursor-pointer'
              value="oneWay"
              checked={selectedOption === 'oneWay'}
              onChange={handleOptionChange}
            />
            <p className="mb-px	">One Way</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
          <input
              type="radio"
              id="roundTrip"
              name="bookingOption"
              className='w-[20px] h-[20px] cursor-pointer'
              value="roundTrip"
              checked={selectedOption === 'roundTrip'}
              onChange={handleOptionChange}
            />
            <p className="mb-px	">Round Trip</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
          <input
              type="radio"
              id="multiCity"
              name="bookingOption"
              className='w-[20px] h-[20px] cursor-pointer'
              value="multiCity"
              checked={selectedOption === 'multiCity'}
              onChange={handleOptionChange}
            />
            <p className="mb-px	">Multi City</p>
          </div>
        </div>
        <div className="flex mt-5 mb-3 border rounded-xl	px-5 border-gray-300">
          <div className="border-r py-5 pr-12">
            <p className="text-sm text-gray-500">From</p>
            <h2 className="text-3xl font-semibold">Delhi</h2>
            <p className="text-lg text-gray-600">DEL, Delhi Airport India</p>
          </div>
          <div className="border-r py-5 pr-12 pl-5">
            <p className="text-sm text-gray-500">To</p>
            <h2 className="text-3xl font-semibold">Bangalore</h2>
            <p className="text-lg text-gray-600">
              BLR, Bengaluru International Airport
            </p>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 ">Departure</p>
            <h2 className="text-3xl font-semibold">
              <span className="text-[44px]">4 </span>Aprl 24
            </h2>
            <p className="text-lg text-gray-600">Thrusday</p>
          </div>
        </div>
        <AnimButton className="mx-auto">Search</AnimButton>
      </div>
    </div>
  );
};

export default Booking;
