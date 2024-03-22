import React from "react";
import { statisticsCardsData } from "../../../data/statistics-cards-data";
import { Button, Typography } from "@material-tailwind/react";
import { StatisticsCard } from "../../../widget/cards/statistics-card";
import "./Dashboard2.css";
import { EtfCard } from "../../../Components/Card/EtfCard";
import ChartSection from "../../../Components/Chart/ChartSection";

const Dashboard2 = () => {
  return (
    <div className="MainWrappers lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col ">
      <div className="leftWrappers">
        <div className="m-2 mt-7 text-white">
          <div className="port">
            <span>Porfolio</span>
          </div>
          <div className="upCard m-5 mt-10 grid gap-y-10 gap-x-6 md:grid-cols-2 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-6  xl:grid-cols-4">
            {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
              <StatisticsCard
                key={title}
                {...rest}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-6 h-6 text-white",
                })}
                footer={
                  <Typography className="font-normal text-blue-gray-600">
                    <strong className={footer.color}>{footer.value}</strong>
                    &nbsp;<span className="text-white">{footer.label}</span>
                  </Typography>
                }
              />
            ))}
          </div>

          <div className="navig">
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
          <div className="etf">
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
          <div className="navig">
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
          <div className="etf">
            <EtfCard
              name={"Tanishq Digital Gold"}
              price={"6,415.1/g"}
              change={"+1.21 (+0.02%)"}
              color={"text-green-500"}
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHi6jYIO_PMZ-eTiCy1oIGDofDnusxxWpVg"
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
          <div className="navig">
            <span>Physical Gold</span>
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

          <div className="etf">
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
      <div className="rightWrappers md:ml-10">
        <ChartSection Id={"bitcoin"} />
      </div>
    </div>
  );
};

export default Dashboard2;
