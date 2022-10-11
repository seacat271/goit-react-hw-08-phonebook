
import { ContainerGlobal } from './App.styled';
import { Navigate, Route, Routes} from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { refresh } from 'redux/auth/authOperations';
import { authSelector } from 'redux/auth/authSelectors';


const RegisterView = lazy(() => import ("../views/RegisterView"));
const LoginView = lazy(() => import ('../views/LoginView'));
const HomeView = lazy(() => import("../views/HomeView"));
const ContactsView = lazy(() => import("../views/ContactsView"));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(refresh())
  }, [dispatch])

  const isLoggedIn = useSelector(authSelector);
const redirect = value => <Navigate to={`/${value}`} replace/>
const path = "contacts"

  return (
    <ContainerGlobal>
         
    <AppBar/>
    <Suspense fallback={null}>
      <Routes>
        <Route exact path = "/" element ={<HomeView/>} />
        <Route path = "/register" element ={isLoggedIn ? redirect(path) : <RegisterView/>} />
        <Route path = "/login" element ={isLoggedIn ? redirect(path) : <LoginView/>} />
        <Route path = "/contacts" element ={isLoggedIn ? <ContactsView/> : redirect() } />
    </Routes>
    </Suspense>
    </ContainerGlobal>
  );
}

// <Routes>
//   <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="movies" element={<Movies/>}/>
//       <Route path="movies/:movieId" element={<MovieDetails/>}>
//         <Route path="cast" element={<Cast/>}/>
//         <Route path="reviews" element={<Reviews/>}/>
//       </Route>
//       <Route path="*" element={<Navigate to="/"/>}></Route>
//   </Route>
// </Routes>