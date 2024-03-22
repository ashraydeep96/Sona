import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PowerIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  CurrencyRupeeIcon,
  ShoppingCartIcon,
  CubeTransparentIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  CreditCardIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavWith() {
  const [openNav, setOpenNav] = React.useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const [openAlert, setOpenAlert] = React.useState(true);
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onPortfolioClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onBuyClick = useCallback(() => {
    navigate("/buy");
  }, [navigate]);

  const onSellClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onCartClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const profileMenuItems = [
    {
      label: user.name,
      clickFn: onSettingsClick,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      clickFn: () =>logout({ logoutParams: { returnTo: window.location.origin } }),
    },
  ];

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    const openMenu = () => setIsMenuOpen(true);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 ml-10"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, clickFn }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={isLastItem ? closeMenu : openMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                  onClick={clickFn}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-14 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 cursor-pointer ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        onClick={onDashboardClick}
      >
        Dashboard
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        onClick={onExploreClick}
      >
        Explore
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        onClick={onPortfolioClick}
      >
        Portfolio
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        onClick={onSettingsClick}
      >
        Accounts
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        onClick={onCartClick}
      >
        Cart
      </Typography>
    </ul>
  );


  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-hidden bg-transparent">
      {/* HEADER */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:px-8 lg:py-2 bg-gray-900">
        <div className="flex items-center justify-start text-white mt-5">
          <IconButton
            variant="text"
            size="lg"
            onClick={openDrawer}
            color="white"
          >
            {isDrawerOpen ? (
              <XMarkIcon className="h-8 w-8 stroke-2" />
            ) : (
              <Bars3Icon className="h-8 w-8 stroke-2" />
            )}
          </IconButton>
            <Typography className="cursor-pointer py-1.5 font-black mr-96 ml-5" onClick={onDashboardClick}>
              SONA
            </Typography>
          <div className="flex items-center md:gap-80 lg:gap-[30rem] xl:gap-[30rem]">
            <div className="mr-4 ml-[33rem] hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <ProfileMenu />
        </div>
        <MobileNav open={openNav}>
          {navList}
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
      {/* SIDEBAR */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="bg-gray-900">
        <Card
          color="gray"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img src={logo} alt="brand" className="h-8 w-8" />
            <Typography variant="h5" color="white" className="font-black">
              SONA
            </Typography>
          </div>
          <div className="p-2" color="white">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" color="white" />}
              label="Search"
              color="white"
            />
          </div>
          <List>
            <ListItem className="text-white" onClick={() => { onDashboardClick(); closeDrawer(); }}>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className="text-white" onClick={() => { onPortfolioClick(); closeDrawer(); }}>
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              My Portfolio
            </ListItem>

            <Accordion
              open={open === 1}
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
                    <BuildingLibraryIcon className="h-5 w-5" color="white" />
                  </ListItemPrefix>
                  <Typography color="white" className="mr-auto font-normal">
                    Trade
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <ListItem className="text-white" onClick={() => { onBuyClick(); closeDrawer(); }}>
                  <ListItemPrefix>
                    <CreditCardIcon className="h-5 w-5" color="white" />
                  </ListItemPrefix>
                  Buy
                </ListItem>
                <ListItem className="text-white" onClick={() => { onSellClick(); closeDrawer(); }}>
                  <ListItemPrefix>
                    <CurrencyRupeeIcon className="h-5 w-5" color="white" />
                  </ListItemPrefix>
                  Sell
                </ListItem>
              </AccordionBody>
            </Accordion>

            <ListItem className="text-white" onClick={() => { onExploreClick(); closeDrawer(); }}>
              <ListItemPrefix>
                <ViewfinderCircleIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              Explore
            </ListItem>
            <ListItem className="text-white" onClick={() => { onCartClick(); closeDrawer(); }}>
              <ListItemPrefix>
                <ShoppingCartIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              Cart
            </ListItem>
            <ListItem className="text-white" onClick={() => { onSettingsClick(); closeDrawer(); }}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              Settings
            </ListItem>

            
            <ListItem
              className="text-white"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1 bg-yellow-600 rounded-lg text-black w-32 ">
              <span className="ml-3">Beta Version</span>
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              We are currentli in Beta Version and ongoing with testing. Kindly reach out to us if you find any bugs.
            </Typography>
          </Alert>
        </Card>
      </Drawer>
    </div>
  );
}
