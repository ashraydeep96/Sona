import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  CardFooter,
} from "@material-tailwind/react";
import { React, useState } from "react";

import { Popover } from "flowbite-react";

export function BuyCard({ name, price, change, color, img, addToCart }) {
  const [showPopover, setShowPopover] = useState(true);
  const [popoverContent, setPopoverContent] = useState(true);

  const content = (
    <div className="w-40 text-base text-black bg-red-100 dark:text-black">
      <div className="border-b text-center border-red-100 bg-red-100 px-3 py-2 dark:border-red-100 dark:bg-red-100">
        <h3 className="font-semibold text-black dark:text-white flex flex-row">
          <ShoppingCartIcon
            height="20"
            width="20"
            className="mr-2 text-red-500"
          />
          <span>Added to Cart</span>
        </h3>
      </div>
    </div>
  );

  const openPop = () => {
    setPopoverContent(content);
  };

  const closePopover = () => {
    setPopoverContent(null);
  };

  setTimeout(() => {
    closePopover();
  }, 2000);

  return (
    <Card className="w-60 h-100 bg-gray-800 text-white shadow-lg mt-5 mb-5 ml-5 hover:cursor-pointer hover:bg-gray-700">
      <CardHeader floated={false} color="blue-gray">
        <div className="h-52 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out">
          <img src={`${img}`} alt="ui/ux review check" className="hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" />
        </div>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold text-white"
          >
            {name}
          </Typography>
        </div>
        <Typography color="gray" className="text-white font-bold">
          ₹{price}
        </Typography>
        <Typography className={`text-white ${color} font-bold`}>
          {change}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="">
          {showPopover && (
            <Popover content={popoverContent} trigger="click" arrow={false}>
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 rounded-lg shadow-gray-100/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-48 bg-gray-100 text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
                onClick={() => {
                  addToCart({ name, price, change, color, img });
                  openPop();
                }}
              >
                Add to Cart
              </button>
            </Popover>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
