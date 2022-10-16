
import { Navigate, Route, Routes} from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { refresh } from 'redux/auth/authOperations';
import { loggedInSelector, refreshingSelector, loadingSelector } from 'redux/auth/authSelectors';
import { Loader } from 'utils/loader';
import { Box } from '@mui/system';


const RegisterView = lazy(() => import ("../views/RegisterView"));
const LoginView = lazy(() => import ('../views/LoginView'));
const HomeView = lazy(() => import("../views/HomeView"));
const ContactsView = lazy(() => import("../views/ContactsView"));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(refresh())
  }, [dispatch])

const isLoggedIn = useSelector(loggedInSelector);
const isRefreshing = useSelector(refreshingSelector);
const isLoading = useSelector(loadingSelector);
const redirect = value => <Navigate to={value} replace/>
const contactPath = "/contacts";
const homePath = "/";
const loginPath = "/login"



  return (
    <div>
    <Header/>
    {isLoading && <Loader/>}
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", marginRight: "auto", marginLeft: "auto" , width: "1200px"}}>
   
    <Suspense fallback={null}>
      {isLoggedIn 
      ? (<Routes>
            <Route exact path = {homePath} element ={<HomeView/>} />
            <Route path = {contactPath} element ={<ContactsView/>} />
            <Route path = "*" element = {redirect(contactPath)} />
        </Routes>) 
      : (<Routes>
        <Route exact path = {homePath} element ={<HomeView/>} />
        <Route path = "/register" element ={<RegisterView/>} />
        <Route path = {loginPath} element ={<LoginView/>}/>
        <Route path = "*" element = {!isRefreshing && redirect(homePath)}/>
    </Routes>)}
    </Suspense>
    </div>
    </div>
  );
}
