import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-8 m-auto">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-800 text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-10 ml-5" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="*"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="*"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="*"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="*"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-gray-500" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Sona
      </Typography>
    </footer>
  );
}
