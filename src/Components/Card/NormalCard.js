import React from 'react'
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

import '../../pages/Dashboard/Dashboard.css'

const NormalCard = ({ total, current }) => {
  return (
    <div>
       <Card className="mt-4 mb-6 w-96 h-24 bg-gray-900 border-2 border-gray-800 text-white hover:cursor-pointer" color="white">
            <CardBody>
                <div className="rightCard">
                    <div className="total">
                        <Typography variant="h5" color="white" className="mb-2">
                        {total}
                        </Typography>
                        <Typography>Total Returns</Typography>
                    </div>

                    <div className="current">
                        <Typography variant="h5" color="white" className="mb-2">
                        {current}
                        </Typography>
                        <Typography>Current Value</Typography>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default NormalCard
