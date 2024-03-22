import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import CartCard from "../../Components/Card/CartCard";

const Cart = () => {
  return (
    <div>
      <div className="text-white mb-5">
        <Link to="/buy" className="port flex flex-row hover:cursor-pointer">
          <ArrowLeftIcon height="25" width="25" className="mr-3" />
          <span className="text-lg">Back</span>
        </Link>

        <div className="container mx-auto mt-10">
          <div className="sm:flex shadow-md my-10">
            <div className="  w-full  sm:w-3/4 bg-gray-800 rounded-xl px-10 py-10 rightCard">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
              </div>
              <CartCard />
              <CartCard />

              <Link
                to="/buy"
                className="flex font-semibold text-red-500 text-sm mt-10"
              >
                <ArrowLeftIcon className="mr-2 text-red-500 w-5" />
                Continue Shopping
              </Link>
            </div>
            
            <div
              id="summary"
              className=" w-full h-[43rem] sm:w-1/4 md:w-1/2 px-8 py-10 bg-gray-800 rounded-xl ml-2 card2"
            >
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                {/* Here Edit needs */}
                <span className="font-semibold text-sm uppercase">
                  Total Items - 1
                </span>
                <span className="font-semibold text-sm">₹12000</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-base uppercase">
                  Shipping
                </label>
                <select className="block text-base p-2 rounded-xl text-black w-full h-10">
                  <option>Select</option>
                  <option>Standard shipping - ₹100</option>
                  <option>Indian Post - ₹150</option>
                  <option>Speed Post Shipping - ₹200</option>
                  <option>Custom Shipping - ₹500</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-base uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-black rounded-xl text-base w-full uppercase"
                />
              </div>
              <button className="bg-red-500 rounded-xl hover:bg-red-600 px-5 py-2 text-sm font-bold text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>₹12500</span>
                </div>
                <button className="bg-red-500 font-semibold rounded-xl hover:bg-red-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
