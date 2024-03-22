import React from 'react'
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

import '../../pages/Dashboard/Dashboard.css'

const GoldCard = ({ heading, price, ratePrGm, percent, color }) => {
  return (
    <div>
       <Card className="mt-6 w-48 bg-gray-700 text-white hover:cursor-pointer hover:bg-gray-800" color="white">
        <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
            {heading}
            </Typography>
            <div className="card">
                <Typography className="card">
                ₹{price} <ArrowTrendingUpIcon className="h-5 w-10 ml-1 " color="#9ccc65"/>
                </Typography>
                <div className={`perGm ml-2 ${color} font-bold`}>{ratePrGm} ({percent}%)</div>
            </div>
        </CardBody>
    </Card>
    </div>
  )
}

export default GoldCard

