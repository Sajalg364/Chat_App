/* eslint-disable react/prop-types */
import { Suspense, lazy, useState } from "react";
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import { Add as AddIcon,Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon , Notifications as NotificationsIcon} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(()=> import("../specific/Search"));
const NewGroupDialog = lazy(()=> import("../specific/NewGroup"));
const NotificationDialog = lazy(()=> import("../specific/Notifications"));


const Header = () => {
  const [mobile,setMobile] = useState(false);
  const [search,setSearch] = useState(false);
  const [addGroup,setAddGroup] = useState(false);
  const [notifications,setNotifications] = useState(false);


  const navigate = useNavigate()

  const handleMobile = () => {
    setMobile((prev) => !prev);
  }
  const handleSearch = () => {
    setSearch((prev) => !prev);
  }
  const handleAddGroup = () => {
    setAddGroup((prev) => !prev)
  }
  const handleNotifications = () => {
    setNotifications((prev) => !prev)
  }

  const handleManageGroup=()=> navigate()("/groups");

  const handleLogout = () => {
    console.log("handle add group");
  }

  return (
    <>
      <Box sx={{ flexFlow: "1" }} height="4rem">
        <AppBar position="static" sx={{
          bgcolor: "cyan"
        }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              What is Up
            </Typography>
            <Box sx={{
              display: { xs: "block", sm: "none" }
            }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>

              <IconBtn title={"search"} icon={<SearchIcon/>} onClick={handleSearch}/>
              <IconBtn title={"add group"} icon={<AddIcon/>} onClick={handleAddGroup}/>
              <IconBtn title={"manage groups"} icon={<GroupIcon/>} onClick={handleManageGroup}/>
              <IconBtn title={"notifications"} icon={<NotificationsIcon/>} onClick={handleNotifications}/>
              <IconBtn title={"logout"} icon={<LogoutIcon/>} onClick={handleLogout}/>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {search && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog/>
        </Suspense>
      )}
      {addGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog/>
        </Suspense>
      )}
      {notifications && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog/>
        </Suspense>
      )}
    </>
  )
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header