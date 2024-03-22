import {
  BanknotesIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: CurrencyRupeeIcon,
    title: "Total Assets",
    value: "₹53,428",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: BuildingLibraryIcon,
    title: "SGB's Value",
    value: "800gm",
    footer: {
      color: "text-green-500",
      value: "+0.2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Physical Gold Price",
    value: "₹6,023/g",
    footer: {
      color: "text-red-500",
      value: "-0.35(-0.003%)",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Digital Gold Price",
    value: "₹6,412/g",
    footer: {
      color: "text-green-500",
      value: "+22.82(+0.36%)",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
