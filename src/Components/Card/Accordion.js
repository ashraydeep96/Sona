import React from "react";
import {
  Typography,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
    HeartIcon,
  } from "@heroicons/react/24/solid";
  import {
    ChevronDownIcon,
    CreditCardIcon,
  } from "@heroicons/react/24/outline";

const WatchAccordion = () => {

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };

  return (
    <Accordion
      open={open === 1}
      className="border-2 border-gray-800 rounded-lg w-96"
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 1 ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-0 p-3"
        >
          <ListItemPrefix>
            <HeartIcon className="h-5 w-5" color="white" />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Wishlist
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <ListItem className="text-white">
          <ListItemPrefix>
            <CreditCardIcon className="h-5 w-5" color="white" />
          </ListItemPrefix>
          Nippon ETF Infra BeES
        </ListItem>
        <ListItem className="text-white">
          <ListItemPrefix>
            <CreditCardIcon className="h-5 w-5" color="white" />
          </ListItemPrefix>
          SGB's 42gm
        </ListItem>
      </AccordionBody>
    </Accordion>
  );
};

export default WatchAccordion;
