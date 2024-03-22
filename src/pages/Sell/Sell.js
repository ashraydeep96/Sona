import React from "react";
import "./Sell.css";
import { SellCard } from "../../Components/Card/SellCard";

const Sell = () => {
  const etfCardData = [
    {
      name: "Axis Gold ETF Fund Ltd",
      price: "28 Unit",
      change: "+ ₹1258 (+1.12%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVywZyfh-81ewm_R9ReCrH5F47RoYJDTYc3g",
    },
    {
      name: "SBI Gold ETF - Gold Exchange Fund Ltd",
      price: "18 Unit",
      change: "- ₹239 (-0.16%)",
      color: "text-red-500",
      img: "https://s3-symbol-logo.tradingview.com/sbi-mutual-fund--600.png",
    },
  ];

  const physicalCardData = [
    {
      name: "Om 10 Gram Coin",
      price: "₹70,899",
      change: "Tanishq - 22K",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3ZtEPkqsnqksWnt2f3hl0qj5l9Yi0FrwXCuGZALc2C5y8AGA6aUOCh0yLN7NNGKfwJs",
    },
    {
      name: "Vedhani - 20gm",
      price: "₹59,402",
      change: "Ranka Jewellers - 24K",
      color: "text-green-500",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRP3ckUCMJBuRmn1dXgN9NErYC42LAyOAgBUJFMTOu4-egD4Ml-j_8S3i-PlV6MUsRqXtrMUC6OJLH_fCYBwcioiNz2B7bAWcZY8ZvMNULhP8GcQtZD3ctLJw",
    },
    {
      name: "Idika Necklace",
      price: "₹1,50,805",
      change: "Giriraj Jewellers - 22K",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSO2aElC48Q7MbHrPlQaiOyW4BYQkmkBtUAXZidVOfrlHtmZpO1VEemMfQdElG08WxdfyY7bMBsId96sd1Ang-YEtlP4svFa55vRmleHXAj",
    },
  ];

  const digitalCardData = [
    {
      name: "SAFEGOLD Digital Gold",
      price: "150gm",
      change: "+ ₹2362.82 (+0.36%)",
      color: "text-green-500",
      img: "https://safegoldstatic.s3.ap-south-1.amazonaws.com/images/safegold-pg-logo.jpg",
    },
    {
      name: "AUGMONT Digital Gold",
      price: "800gm",
      change: "+ ₹1350.19 (+0.003%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_02ILAYJTEc43zG3ryKxMUEA_9druOZN5_A",
    },
    {
      name: "DigiGold Digital Gold",
      price: "450gm",
      change: "+ ₹1773.16 (+0.3%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGl04jDvVZqTb3MSy3dJS32RM9DUpbYlWtbA",
    }
  ];

  const sgbCardData = [
    {
      name: "RBI - Sovereign Gold Bond",
      price: "600gm",
      change: "+₹58035 (+0.78%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RSbhi8-Yiivjza2WQEDHLp_QBrldQYNTdA",
    },
  ];

  return (
    <div>
      <div className="text-white mb-5">
        <div className="port">
          <span>Explore/Buy/Gold</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="m-5 flex flex-col">
          <div className="ml-5">
            {/* ETF */}
            <div className="flex flex-col">
              <div className="navig text-white">
                <span>Gold ETFs</span>
              </div>
              <div className="flex flex-row">
                {etfCardData.map((card, index) => (
                  <SellCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                  />
                ))}
              </div>
            </div>
            {/* SGBs */}
            <div className="flex flex-col">
              <div className="navig text-white">
                <span>Gold SGBs</span>
              </div>
              <div className="flex flex-row">
                {sgbCardData.map((card, index) => (
                  <SellCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                  />
                ))}
              </div>
            </div>
            {/* Physical Gold */}
            <div className="flex flex-col">
              <div className="navig text-white">
                <span>Physical Gold</span>
              </div>
              <div className="flex flex-row">
                {physicalCardData.map((card, index) => (
                  <SellCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                  />
                ))}
              </div>
            </div>
            {/* Digital Gold */}
            <div className="flex flex-col">
              <div className="navig text-white">
                <span>Digital Gold</span>
              </div>
              <div className="flex flex-row">
                {digitalCardData.map((card, index) => (
                  <SellCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
