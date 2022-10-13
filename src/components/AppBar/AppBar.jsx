import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { userMail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { loggedInSelector } from 'redux/auth/authSelectors';
import { Toolbar, AppBar, Typography, Link, Button, Box, IconButton } from '@mui/material';
import { NavLink as RouteLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Header = () => {
  const isLoggedIn = useSelector(loggedInSelector);
  const dispatch = useDispatch();
  const mail = useSelector(userMail);
  return (
    <>
      <AppBar  sx={{pr: "auto", pl: "auto" }}>
        <Toolbar  sx={{boxSizing: "border-box", width: "1200px", mr: "auto", ml: "auto", pr: 4, pl: 4 }}>
            <Box component="div" sx={{
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',
        flexGrow: 1,
        
      }}>
           <ContactPhoneIcon sx={{mr: 2}}/>
            <Link component={RouteLink} to="/" underline="none" color="inherit" sx={{mr: 2}} >
             
            <Typography variant="h5">PhoneBook</Typography>
          </Link>
          <Link component={RouteLink} to="/contacts" color="inherit" underline="none" >
            <Typography variant="h5">Contacts</Typography>
            </Link>
            </Box>
          
          {isLoggedIn ? (
            <Box component="div" sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                
              }}>
              <Typography component="span" color="inherit" sx={{mr: 2}}>Hello, {mail}</Typography>
              <IconButton onClick={() => dispatch(logout())} color="inherit">
                <LogoutIcon />
              </IconButton>
            </Box>
          ) : (
            <Box component="div" sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                
              }}>
              <Link component={RouteLink} to="/register" color="inherit" underline="none" sx={{mr: 2}}>
                <Typography >Registration</Typography>
              </Link>
              <Link component={RouteLink} to="/login" color="inherit" underline="none" >
                <Typography >Login</Typography>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
