import React, { useState } from "react";
import "./Buy.css";
import { BuyCard } from "../../Components/Card/BuyCard";
import Cart from "../Cart/Cart";
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const Buy = () => {
  const etfCardData = [
    {
      name: "Axis Gold ETF Fund Ltd",
      price: "56.60/ Unit",
      change: "+1.58 (+0.12%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVywZyfh-81ewm_R9ReCrH5F47RoYJDTYc3g",
    },
    {
      name: "SBI Gold ETF - Gold Exchange Fund Ltd",
      price: "58.15/ Unit",
      change: "+1.39 (+0.07%)",
      color: "text-green-500",
      img: "https://s3-symbol-logo.tradingview.com/sbi-mutual-fund--600.png",
    },
    {
      name: "Nippon India ETF Gold BeES",
      price: "56.64/ Unit",
      change: "+1.67 (+0.18%)",
      color: "text-green-500",
      img: "https://storage.googleapis.com/5paisa-prod-storage/11-04-2022/NIPPON.png",
    },
    {
      name: "Birla Sun Life Gold ETF",
      price: "59.75/ Unit",
      change: "+2.01 (+0.43%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAQd-e18EXpGXc4K0fYZoe-7TiUNWpru0Cw",
    },
    {
      name: "HDFC-Gold Exchange Fund Ltd.",
      price: "58.32/ Unit",
      change: "+1.76 (+0.13%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0knfosma2F1AIrXUEyWgR8cVpK5GfX8G2Hg",
    },
    {
      name: "UTI Gold Exchange Traded Fund Ltd.",
      price: "56.78/ Unit",
      change: "+1.65 (+0.09%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmV0j6UPp307ouvKb3SXVxVchAdYMw3JB5ig",
    },
  ];

  const physicalCardData = [
    {
      name: "Om 10 Gram Coin",
      price: "70,899",
      change: "Tanishq - 22K",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3ZtEPkqsnqksWnt2f3hl0qj5l9Yi0FrwXCuGZALc2C5y8AGA6aUOCh0yLN7NNGKfwJs",
    },
    {
      name: "Gold Coin 10Gram",
      price: "60,415.1",
      change: "Tanishq - 24K",
      color: "text-green-500",
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw09d4d3e0/images/hi-res/60C2ECZAMAAP00_2.jpg",
    },
    {
      name: "Vedhani - 20gm",
      price: "59,402",
      change: "Ranka Jewellers - 24K",
      color: "text-green-500",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRP3ckUCMJBuRmn1dXgN9NErYC42LAyOAgBUJFMTOu4-egD4Ml-j_8S3i-PlV6MUsRqXtrMUC6OJLH_fCYBwcioiNz2B7bAWcZY8ZvMNULhP8GcQtZD3ctLJw",
    },
    {
      name: "Necklace - 3.35gm",
      price: "19,649",
      change: "Giriraj Jewellers - 14K",
      color: "text-green-500",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwOeLkSu4iqfmqpc3ICS0T4Z4ymR57if0VzZiyilS-dlta6PSg5jFUuPBynUedlGPgXHQ3DBfTzcjHCkcotKCJ9f8jjXvniC1TsCwhwdtskb4qGeDb5wDymA",
    },
    {
      name: "Treasure Necklace",
      price: "2,21,680",
      change: "Tanishq - 24K",
      color: "text-green-500",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0FMnoTz2_I1JD-SCIhiR0VIBUSBMc8cRI3jJD7S8lC8aIV9yEnP9-yrdEm0-caoWiN-kzmzlYys9GQcT131hoOa0XPamqib_m3pl_79rk",
    },
    {
      name: "Idika Necklace",
      price: "1,50,805",
      change: "Giriraj Jewellers - 22K",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSO2aElC48Q7MbHrPlQaiOyW4BYQkmkBtUAXZidVOfrlHtmZpO1VEemMfQdElG08WxdfyY7bMBsId96sd1Ang-YEtlP4svFa55vRmleHXAj",
    },
  ];

  const digitalCardData = [
    {
      name: "Caratlane Digital Gold",
      price: "5,819.1/g",
      change: "+1.12 (+0.07%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1AYVcqd-OU-dOqCa__B9b2OvilumzHi7tcWv4V83GUyNoj2yU8z3zTd8QCgwLEl9n3U",
    },
    {
      name: "Tanishq Digital Gold",
      price: "6,415.1/g",
      change: "+1.21 (+0.02%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHi6jYIO_PMZ-eTiCy1oIGDofDnusxxWpVg",
    },
    {
      name: "SAFEGOLD Digital Gold",
      price: "6,412.42/g",
      change: "+22.82 (+0.36%)",
      color: "text-green-500",
      img: "https://safegoldstatic.s3.ap-south-1.amazonaws.com/images/safegold-pg-logo.jpg",
    },
    {
      name: "AUGMONT Digital Gold",
      price: "6,387.49/g",
      change: "+0.19 (+0.003%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_02ILAYJTEc43zG3ryKxMUEA_9druOZN5_A",
    },
    {
      name: "DigiGold Digital Gold",
      price: "6,825.19/g",
      change: "+0.16 (+0.3%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGl04jDvVZqTb3MSy3dJS32RM9DUpbYlWtbA",
    },
    {
      name: "PC Jwellers Digital Gold",
      price: "6,911.19/g",
      change: "+0.31 (+0.13%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPhl-qHIAqWZlhTBZWavHjSL9K4bLT4wAvQ",
    },
  ];

  const sgbCardData = [
    {
      name: "RBI - Sovereign Gold Bond",
      price: "₹6,263.2/g",
      change: "+4.29 (+0.18%)",
      color: "text-green-500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RSbhi8-Yiivjza2WQEDHLp_QBrldQYNTdA",
    },
  ];

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, data]);
  }
  

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
                  <BuyCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                    addToCart = {addToCart}
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
                  <BuyCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                    addToCart = {addToCart}
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
                  <BuyCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                    addToCart = {addToCart}
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
                  <BuyCard
                    key={index}
                    name={card.name}
                    price={card.price}
                    change={card.change}
                    color={card.color}
                    img={card.img}
                    addToCart = {addToCart}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Buy;
