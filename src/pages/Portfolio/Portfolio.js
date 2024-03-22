import "./Portfolio.css";
import React from "react";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/solid";
import OneChart from "../../Components/Chart/OneChart";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <main className="child-h">
        <section className="child-i">
          <div className="parent-c">
            <div className="child-k flex-row">
              <div className="flex flex-col leftCont">
                <div className="child-l pr-10">
                  <div className="child-p">
                    <div className="portfolio-overview-wrapper">
                      <div className="portfolio-overview">
                        Portfolio Overview
                      </div>
                    </div>
                    <div className="container-56 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer">
                      <div className="total-assets">Total assets</div>
                      <div className="frame">
                        <b className="b">₹ 39,876.33</b>
                      </div>
                    </div>
                  </div>
                  <div className="frame-div">
                    <div className="this-months-summary-wrapper flex flex-col">
                      <div className="this-months-summary">
                        This Month's Summary
                      </div>
                      <br />
                      <div className="cardsWrapp flex flex-row">
                        <Card className="cards1 mr-5 w-56 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer">
                          <CardBody>
                            <div className="flex flex-row">
                              <ArrowsUpDownIcon
                                height="30"
                                color="white"
                                width="30"
                              />
                              <Typography
                                variant="h5"
                                color="white"
                                className="mb-2 ml-2"
                              >
                                Recent Trades
                              </Typography>
                            </div>
                            <Typography
                              variant="h6"
                              color="white"
                              className="ml-10"
                            >
                              ₹325,920
                            </Typography>
                          </CardBody>
                        </Card>
                        <Card className="cards2 mr-5 w-56 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer">
                          <CardBody>
                            <div className="flex flex-row">
                              <ArrowTrendingUpIcon
                                height="30"
                                color="white"
                                width="30"
                              />
                              <Typography
                                variant="h5"
                                color="white"
                                className="mb-2 ml-2"
                              >
                                Total Profit
                              </Typography>
                            </div>
                            <Typography
                              variant="h6"
                              className="ml-10 font-bold text-green-500"
                            >
                              ₹320,850
                            </Typography>
                          </CardBody>
                        </Card>
                        <Card className="cards3 mr-5 w-56 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer">
                          <CardBody>
                            <div className="flex flex-row">
                              <ArrowTrendingDownIcon
                                height="30"
                                color="white"
                                width="30"
                              />
                              <Typography
                                variant="h5"
                                color="white"
                                className="mb-2 ml-2"
                              >
                                Total Loss
                              </Typography>
                            </div>
                            <Typography
                              variant="h6"
                              className="ml-10 font-bold text-red-500"
                            >
                              ₹10,100
                            </Typography>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gold-beauty-products-frame mt-8">
                  <div className="flex flex-col">
                    <div className="weekly-gold-statistics-wrapper">
                      <div className="weekly-gold-statistics text-white">
                        Weekly Gold Statistics
                      </div>
                    </div>
                    <br />
                    <div className="image-63-parent">
                      <div>
                        <OneChart Id={"bitcoin"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="child-k-inner">
                <div className="parent-a-parent">
                  <div className="parent-a1">
                    <div className="frame-a">
                    <Avatar
                      variant="circular"
                      size="sm"
                      alt="tania andrew"
                      className="border border-gray-900 p-0.5"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                      <div className="frame-b">
                        <div className="welcome-to">Welcome to Sona</div>
                      </div>
                    </div>
                    <div className="restaurants1">
                      <div className="container-c">
                        <div className="frame-d">
                          <div className="trade-history">Trade History</div>
                        </div>
                        <nav className="symbol">
                          <div class="flex divide-x divide-gray-900 row">
                            <button
                              class="px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all border-r-0 rounded-lg rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-700/10 active:bg-gray-700/20"
                              type="button"
                            >
                              All
                            </button>
                            <button
                              class="px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-700/10 active:bg-gray-700/20"
                              type="button"
                            >
                              Investment
                            </button>
                            <button
                              class="px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg rounded-l-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-700/10 active:bg-gray-700/20"
                              type="button"
                            >
                              Expenses
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="italian-restaurants">
                    <div className="gold-beauty-products">
                      <div className="pending-transactions text-base text-white">
                        Pending transactions
                      </div>
                      <div className="container-54">
                        <div className="restaurantsand-cafes">
                          <div className="frame-f">
                            <div className="frame-g">
                              <ArrowTrendingDownIcon height="20" width="20" />
                            </div>
                            <div className="parent-container1">
                              <div className="sona-menu">Sona Menu</div>
                              <div className="text-frame">
                                <div className="restaurants-and-cafes">
                                  Restaurants and Cafes
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="current">Current</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-container1">
                    <div className="inner-frame-parent">
                      <div className="inner-frame">
                        <div className="header-frame">
                          <div className="todays-transactions text-base text-white">
                            Today's Transactions
                          </div>
                          <div className="container-54">
                            <div className="investment-label">
                              <div className="coffee-gold-investments">
                                <div className="image-54-wrapper">
                                  <ArrowTrendingUpIcon height="20" width="20" />
                                </div>
                                <div className="coffee-investments-parent">
                                  <div className="coffee-investments1">
                                    Coffee Investments
                                  </div>
                                  <div className="food-gold-delivery">
                                    <div className="restaurants-and-cafes1">
                                      Restaurants and Cafes
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="investment-wrapper">
                                <div className="investment">Investment</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-54">
                        <div className="image-71-wrapper">
                          <ArrowTrendingDownIcon height="20" width="20" />
                        </div>
                        <div className="rupee-symbol">
                          <div className="grocery-gold-delivery1">
                            Grocery Gold Delivery
                          </div>
                          <div className="food-and-gold-delivery-service-wrapper">
                            <div className="food-and-gold">
                              Food and gold delivery services
                            </div>
                          </div>
                        </div>
                        <div className="div3">₹3500.00</div>
                      </div>
                    </div>
                    <div className="container-54">
                      <div className="gold-delivery-frame">
                        <div className="tech-investments1">
                          <div className="pizza-gold-deals-frame">
                            <ArrowTrendingUpIcon height="20" width="20" />
                          </div>
                          <div className="tech-investments-parent">
                            <div className="tech-investments2">
                              Tech Investments
                            </div>
                            <div className="electronics-investments-wrapper">
                              <div className="electronics-investments">
                                Electronics Investments
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="investment1">Investment</div>
                      </div>
                    </div>
                  </div>


                  <div className="main-container1">
                    <div className="inner-frame-parent">
                      <div className="inner-frame">
                        <div className="header-frame">
                          <div className="todays-transactions text-base text-white">
                            Today's Transactions
                          </div>
                          <div className="container-54">
                            <div className="investment-label">
                              <div className="coffee-gold-investments">
                                <div className="image-54-wrapper">
                                  <ArrowTrendingUpIcon height="20" width="20" />
                                </div>
                                <div className="coffee-investments-parent">
                                  <div className="coffee-investments1">
                                    Coffee Investments
                                  </div>
                                  <div className="food-gold-delivery">
                                    <div className="restaurants-and-cafes1">
                                      Restaurants and Cafes
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="investment-wrapper">
                                <div className="investment">Investment</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-54">
                      <div className="gold-delivery-frame">
                        <div className="tech-investments1">
                          <div className="pizza-gold-deals-frame">
                            <ArrowTrendingUpIcon height="20" width="20" />
                          </div>
                          <div className="tech-investments-parent">
                            <div className="tech-investments2">
                              Tech Investments
                            </div>
                            <div className="electronics-investments-wrapper">
                              <div className="electronics-investments">
                                Electronics Investments
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="investment1">Investment</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
