import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavWithOut() {
  const [openNav, setOpenNav] = React.useState(false);
  const { loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-hidden bg-transparent">
      {/* HEADER */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:px-8 lg:py-2 bg-gray-900">
        <div className="flex items-center justify-between text-white mt-5">
          <Link to="/" className="flex flex-row">
            <img src={logo} alt="brand" className="h-8 w-8 mt-1 ml-5" />
            <Typography
              className="cursor-pointer py-1.5 font-black mr-96 ml-2"
            >
              SONA
            </Typography>
          </Link>
          <div className="flex items-center md:gap-80 lg:gap-[30rem] xl:gap-[30rem]">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                color="white"
                onClick={() => loginWithRedirect()}
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => loginWithRedirect()}
              >
                <span>Sign Up</span>
              </Button>
            </div>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
