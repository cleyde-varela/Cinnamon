import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Planner",
      icon: <CalendarMonthIcon />,
      link: "/planner",
    },
    {
      text: "Search",
      icon: <SearchIcon />,
      link: "/search",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding className="menu-item">
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
