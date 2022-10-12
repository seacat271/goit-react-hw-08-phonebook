import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { userMail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { authSelector } from 'redux/auth/authSelectors';
import { Toolbar, AppBar, Typography, Link, Button, Box, ButtonGroup } from '@mui/material';
import { NavLink as RouteLink } from 'react-router-dom';
export const Header = () => {
  const isLoggedIn = useSelector(authSelector);
  const dispatch = useDispatch();
  const mail = useSelector(userMail);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
            <Box component="div" sx={{
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',
        flexGrow: 1,
        
      }}>
            <Link component={RouteLink} to="/" underline="none" color="inherit" sx={{mr: 2}}>
            <Typography >PhoneBook</Typography>
          </Link>
          <Link component={RouteLink} to="/contacts" color="inherit" underline="none" >
            <Typography>Contacts</Typography>
            </Link>
            </Box>
          
          {isLoggedIn ? (
            <Box component="div" sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                
              }}>
              <Typography component="p" color="inherit">Hello, {mail}</Typography>
              <Button onClick={() => dispatch(logout())} color="inherit">
                <Typography >Logout</Typography>
              </Button>
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
