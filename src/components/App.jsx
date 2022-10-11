
import { ContainerGlobal } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { refresh } from 'redux/auth/authOperations';

const RegisterView = lazy(() => import ("../views/RegisterView"));
const LoginView = lazy(() => import ('../views/LoginView'));
const HomeView = lazy(() => import("../views/HomeView"));
const ContactsView = lazy(() => import("../views/ContactsView"));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(refresh())
  }, [dispatch])


  return (
    <ContainerGlobal>
        
    <AppBar/>
    <Suspense fallback={null}>
      <Routes>
        <Route exact path = "/" element ={<HomeView/>} />
        <Route path = "/register" element ={<RegisterView/>} />
        <Route path = "/login" element ={<LoginView/>} />
        <Route path = "/contacts" element ={<ContactsView/>} />
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