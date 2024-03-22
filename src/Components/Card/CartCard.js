import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import React from "react";

const CartCard = () => {
  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVywZyfh-81ewm_R9ReCrH5F47RoYJDTYc3g"
          alt="Etf"
          className="h-full object-center object-cover md:block hidden rounded-lg"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-white">
          Axis Gold ETF Fund Ltd
          </p>
          <div>
            <input
              type="number"
              placeholder="1"
              className="w-16 text-black rounded-lg h-9 text-center"
            />
            <span className="ml-2">gram</span>
          </div>
        </div>
        <p className="text-xs leading-3 text-white pt-2">Price : 56.60/ Unit</p>
        <p className="text-xs leading-3 text-green-500 py-4">%Change : +1.58 (+0.12%)</p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <Button className="text-xs bg-gray-700 hover:bg-red-100 leading-3 hover:text-red-500 text-white pl-5 cursor-pointer">
              <TrashIcon height="20" width="20" />
            </Button>
          </div>
          <p className="text-base font-black leading-none text-white">₹12,000</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
