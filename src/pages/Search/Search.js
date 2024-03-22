import {
  BellIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import "./Search.css";
import { Avatar, Input } from "@material-tailwind/react";

import image1 from '../../assets/image-85@2x.png'
import image2 from '../../assets/image-93@2x.png'
import image3 from '../../assets/image-88@2x.png'
import image4 from '../../assets/image-79@2x.png'
import image5 from '../../assets/image-97@2x.png'
import image6 from '../../assets/image-77@2x.png'
import image7 from '../../assets/image-75@2x.png'
import image8 from '../../assets/image-101@2x.png'

const Search = () => {
  return (
    <div className="search">
      <main className="gold-e-t-f-name">
        <section className="s-g-b-name">
          <div className="trading-tools-title">
            <div className="physical-gold-frame1">
              <div className="market-analysis-frame">
                <div className="recommended-for-you-frame">
                  <Input
                    label="Search"
                    className="text-white rounded-3xl"
                    color="white"
                    icon={<MagnifyingGlassIcon />}
                  />
                </div>
                <div className="buy-gold-frame">
                  <div className="clear-button-frame">
                    <BellIcon
                      color="white"
                      height="30"
                      width="30"
                      className="hover:cursor-pointer align-middle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-transactions-frame">
              <div className="investment-strategies-frame">
                <div className="trade-history-image">
                  <div className="market-trends-image">
                    <div className="recommended-for-you-frame1">
                      <h3 className="recent-transactions">
                        Recent Transactions
                      </h3>
                    </div>
                    <div className="container-61 hover:cursor-pointer hover:bg-red-700">
                      <div className="clear">Clear</div>
                    </div>
                  </div>
                  <div className="trade-history-image-inner rounded-3xl hover:bg-gray-700 hover:cursor-pointer">
                    <div className="frame-parent5">
                      <div className="image-102-parent">
                        <Avatar
                          className="image-102-icon"
                          variant="circular"
                          loading="lazy"
                          alt=""
                          src="https://s3-symbol-logo.tradingview.com/sbi-mutual-fund--600.png"
                        />
                        <div className="frame-parent6">
                          <div className="gold-etf-wrapper">
                            <div className="gold-etf">SBI - ETF BSE 100</div>
                          </div>
                          <div className="sgb-wrapper">
                            <div className="sgb">ETF</div>
                          </div>
                        </div>
                      </div>
                      <div className="image-frame1">
                        <ChevronRightIcon
                          className="text-white"
                          height="20"
                          width="20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="trade-history-image-inner rounded-3xl hover:bg-gray-700 hover:cursor-pointer">
                    <div className="frame-parent5">
                      <div className="image-102-parent">
                        <Avatar
                          className="image-102-icon"
                          variant="circular"
                          loading="lazy"
                          alt=""
                          src="https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                        />
                        <div className="frame-parent6">
                          <div className="gold-etf-wrapper">
                            <div className="gold-etf">24K Gold- 180gm</div>
                          </div>
                          <div className="sgb-wrapper">
                            <div className="sgb">Physical Gold</div>
                          </div>
                        </div>
                      </div>
                      <div className="image-frame1">
                        <ChevronRightIcon
                          className="text-white"
                          height="20"
                          width="20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="trade-history-image-inner rounded-3xl hover:bg-gray-700 hover:cursor-pointer">
                    <div className="frame-parent5">
                      <div className="image-102-parent">
                        <Avatar
                          className="image-102-icon"
                          variant="circular"
                          loading="lazy"
                          alt=""
                          src="https://safegoldstatic.s3.ap-south-1.amazonaws.com/images/safegold-pg-logo.jpg"
                        />
                        <div className="frame-parent6">
                          <div className="gold-etf-wrapper">
                            <div className="gold-etf">
                              SAFEGOLD Digital Gold-800gm
                            </div>
                          </div>
                          <div className="sgb-wrapper">
                            <div className="sgb">Digital Gold</div>
                          </div>
                        </div>
                      </div>
                      <div className="image-frame1">
                        <ChevronRightIcon
                          className="text-white"
                          height="20"
                          width="20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="trade-history-image-inner rounded-3xl hover:bg-gray-700 hover:cursor-pointer">
                    <div className="frame-parent5">
                      <div className="image-102-parent">
                        <Avatar
                          className="image-102-icon"
                          variant="circular"
                          loading="lazy"
                          alt=""
                          src="https://w1.pngwing.com/pngs/519/224/png-transparent-gold-bar-gold-bar-precious-metal-gold-coin-ingot-bullion-gold-mining-material.png"
                        />
                        <div className="frame-parent6">
                          <div className="gold-etf-wrapper">
                            <div className="gold-etf">
                              Reserve Bank of India- 200gm
                            </div>
                          </div>
                          <div className="sgb-wrapper">
                            <div className="sgb">Sovereign Gold Bond</div>
                          </div>
                        </div>
                      </div>
                      <div className="image-frame1">
                        <ChevronRightIcon
                          className="text-white"
                          height="20"
                          width="20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dual-images-frame text-white">
          <h3 className="recent-transactions">Recommended for You</h3>
          </div>

          <div className="frame-parent10">
            <div className="image-85-parent">
              <img
                className="image-85-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image1}
              />
              <div className="image-93-wrapper">
                <img
                  className="image-93-icon hover:cursor-pointer"
                  loading="lazy"
                  alt=""
                  src={image2}
                />
              </div>
            </div>
            <div className="image-88-parent">
              <img
                className="image-88-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image3}
              />
              <img
                className="image-79-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image4}
              />
            </div>
            <div className="image-97-parent">
              <img
                className="image-97-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image5}
              />
              <img
                className="image-77-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image6}
              />
            </div>
            <div className="empty-frame">
              <div className="content-box">
                <img
                  className="image-75-icon hover:cursor-pointer"
                  loading="lazy"
                  alt=""
                  src={image7}
                />
              </div>
              <img
                className="image-101-icon hover:cursor-pointer"
                loading="lazy"
                alt=""
                src={image8}
              />
            </div>
          </div>
        </section>
        <br />
        <br />
      </main>
    </div>
  );
};

export default Search;
