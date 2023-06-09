//MODULES
import * as React from "react";
import { useNavigate } from "react-router-dom";
//MUI PACKAGES
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//MUI ICONS
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieIcon from "@mui/icons-material/Movie";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavBar({ setCreateModalOpen }) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleNotificationIconClick = () => {
    navigate("./notification");
  };
  const handleHomeIconClick = () => {
    navigate("../feed");
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MenuButton = () => {
    return (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
    );
  };
  const CloseButton = () => {
    return (
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={true}>
        <DrawerHeader>{open ? CloseButton() : MenuButton()}</DrawerHeader>
        <Divider />

        <List>
          {[
            "Home",
            "Search",
            "Explore",
            "Reels",
            "Messages",
            "Notification",
            "Create",
          ].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className="mb-3"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text == "Home" ? (
                    <HomeIcon
                      sx={{ color: "black" }}
                      onClick={() => {
                        handleHomeIconClick();
                      }}
                    />
                  ) : text == "Search" ? (
                    <SearchIcon sx={{ color: "black" }} />
                  ) : text == "Explore" ? (
                    <ExploreIcon sx={{ color: "black" }} />
                  ) : text == "Reels" ? (
                    <MovieIcon sx={{ color: "black" }} />
                  ) : text == "Messages" ? (
                    <SendIcon sx={{ color: "black" }} />
                  ) : text == "Notification" ? (
                    <NotificationsIcon
                      sx={{ color: "black" }}
                      onClick={() => {
                        handleNotificationIconClick();
                      }}
                    />
                  ) : (
                    <AddIcon sx={{ color: "blue", fontSize: 30 }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
