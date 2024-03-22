import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";

import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../../pages/Dashboard/Dashboard2/Dashboard2.css";

export default function NavWithOut() {

  const [openNav, setOpenNav] = React.useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const [openAlert, setOpenAlert] = React.useState(true);
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-hidden bg-transparent">
      {/* HEADER */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:px-8 lg:py-2 bg-gray-900">
        <div className="flex flex-row items-center justify-between text-white mt-5">
          <Link to="/" className="flex flex-row w-40">
            <img src={logo} alt="brand" className="h-8 w-8 mt-1 ml-5" />
            <Typography
              className="cursor-pointer py-1.5 font-black mr-96 ml-2"
            >
              SONA
            </Typography>
          </Link>
          <div className="flex items-center btnnlog lg:gap-[30rem] xl:gap-[30rem]">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="lg:inline-block"
                color="white"
                onClick={() => loginWithRedirect()}
              >
                <span>Log In</span>
              </Button>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
