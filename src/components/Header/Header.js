import { AppBar, Container, Toolbar, Typography, Button, Avatar, IconButton, Box, Menu, MenuItem } from "@mui/material"
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import menuItems from './MenuItems';

export default function Header(props) {
  const [avtarRef, setAvtarRef] = useState(null);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  function handleAvatarMenuOpen(event) {
    setIsSettingOpen(true);
    setAvtarRef(event.currentTarget);
  }

  function handleAvatarMenuClose() {
    setIsSettingOpen(false);
  }

  function handleDrawerOpen() {
    props.setDrawerOpen()
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton color="inherit" sx = {{display: {xs: 'block', md: 'none'}}} onClick={handleDrawerOpen}>
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Button color='inherit' disableRipple
            sx={{
              '&:hover': {
                backgroundColor: 'transparent'
              }, flexGrow: {xs: 1, md: 0}
            }}
          >
            <StorefrontIcon fontSize={'large'} />
            <Typography
              variant="h5"
              ml={1}
              sx={{
                userSelect: 'none',
              }}
            >
              SOMA
            </Typography>
          </Button>
          {
            menuItems.map(({itemName, itemLink}, index)=> {
              return (
                <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center' }} key={index}>
                  <Button color="inherit" size="large">{itemName}</Button>
                </Box>
              )
            })
          }
          <IconButton sx={{ p: 0 }} onClick={handleAvatarMenuOpen}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 35, height: 35 }} />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open = {isSettingOpen}
            onClose={handleAvatarMenuClose}
            anchorEl={avtarRef}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            <MenuItem onClick={handleAvatarMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleAvatarMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleAvatarMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}