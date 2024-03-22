import React from "react";
import "./Dashboard.css";
import GoldCard from "../../Components/Card/GoldCard";
import NormalCard from "../../Components/Card/NormalCard";
import { EtfCard } from "../../Components/Card/EtfCard";
import Accordion from "../../Components/Card/Accordion";
import { Button } from "@material-tailwind/react";

const Dashboard = () => {
  return (
    <div className="mainWrapper">
      <div className="text-white">
        <div className="font-bold mt-12 ml-10">
          Market Closes at 5:00 PM everyday
        </div>
        <hr className="mt-2 border-gray-600" />
      </div>

      <div className="mainwrapper">
        <div className="leftWrapper">
          <div className="m-2 mt-7 text-white">
            <div className="index3">
              <span>Index</span>
              <Button
                variant="text"
                className="flex items-center gap-2 text-white"
              >
                Explore All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
            <div className="index ml-8">
              <GoldCard
                heading={"Gold"}
                price={"641554/kg"}
                ratePrGm={"6,568"}
                percent="4.8"
                color="text-green-500"
              />
              <GoldCard
                heading={"ETFs"}
                price={"57.07"}
                ratePrGm={"-0.27"}
                percent="-0.47"
                color="text-red-500"
              />
              <GoldCard
                heading={"SGBs"}
                price={"5,09100/kg"}
                ratePrGm={"5,091"}
                percent="3.2%"
                color="text-green-500"
              />
            </div>
            <div className="index3">
              <span>ETF's</span>
              <Button
                variant="text"
                className="flex items-center gap-2 text-white"
              >
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
            <div className="etfs">
              <EtfCard
                name={"Kotak PSU Bank ETF"}
                price={"673.18"}
                change={"0.42"}
                color={"text-red-500"}
                img={
                  "https://storage.googleapis.com/5paisa-prod-storage/11-04-2022/KOTAK.png"
                }
              />
              <EtfCard
                name={"SBI - ETF Nifty Next 50"}
                price={"612.99"}
                change={"0.21"}
                color={"text-green-500"}
                img={
                  "https://s3-symbol-logo.tradingview.com/sbi-mutual-fund--600.png"
                }
              />
              <EtfCard
                name={"Nippon ETF Infra BeES"}
                price={"830.19"}
                change={"0.04"}
                color={"text-green-500"}
                img={
                  "https://storage.googleapis.com/5paisa-prod-storage/11-04-2022/NIPPON.png"
                }
              />
              <EtfCard
                name={"SBI - ETF BSE 100"}
                price={"247.59"}
                change={"-0.05"}
                color={"text-red-500"}
                img={
                  "https://s3-symbol-logo.tradingview.com/sbi-mutual-fund--600.png"
                }
              />
            </div>
            <div className="index3">
              <span>Digital Gold</span>
              <Button
                variant="text"
                className="flex items-center gap-2 text-white"
              >
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>

            <div className="etfs">
              <EtfCard
                name={"MMTC-PAMP Digital Gold"}
                price={"6,415.1/g"}
                change={"+1.21 (+0.02%)"}
                color={"text-green-500"}
                img={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLjaw5QOnC_Omp5_v4z0T71-Tq7wvwiAWOQ"
                }
              />
              <EtfCard
                name={"SAFEGOLD Digital Gold"}
                price={"6,412.42/g"}
                change={"+22.82 (+0.36%)"}
                color={"text-green-500"}
                img={
                  "https://safegoldstatic.s3.ap-south-1.amazonaws.com/images/safegold-pg-logo.jpg"
                }
              />
              <EtfCard
                name={"AUGMONT Digital Gold"}
                price={"6,387.49/g"}
                change={"+0.19 (+0.003%)"}
                color={"text-green-500"}
                img={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_02ILAYJTEc43zG3ryKxMUEA_9druOZN5_A"
                }
              />
            </div>

            <div className="index3">
              <span>Phyical Gold</span>
              <Button
                variant="text"
                className="flex items-center gap-2 text-white"
              >
                See All Cities{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>

            <div className="etfs">
              <EtfCard
                name={"UP"}
                price={"65,410/10g"}
                change={"-0.41%"}
                color={"text-red-500"}
                img={
                  "https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                }
              />
              <EtfCard
                name={"Delhi"}
                price={"6,307/10g"}
                change={"+0.38%"}
                color={"text-green-500"}
                img={
                    "https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                }
              />
              <EtfCard
                name={"Mumbai"}
                price={"6,190/10g"}
                change={"+0.26%"}
                color={"text-green-500"}
                img={
                    "https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                }
              />
              <EtfCard
                name={"Jaipur"}
                price={"6,199/10g"}
                change={"-0.21%"}
                color={"text-red-500"}
                img={
                    "https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                }
              />
            </div>

          </div>
        </div>
        <div className="rightWrapper">
          <div className="index2">
            <div className="investment text-white font-bold text-xl">
              Your Investment
            </div>
            <NormalCard total={"₹0"} current={"₹0"} />
          </div>

          <div className="index2">
            <div className="investment text-white font-bold text-xl">
              Watchlist
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
