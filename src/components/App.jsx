
import { ContainerGlobal } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { ContactsView } from 'views/ContactsView';
import { LoginView } from 'views/LoginView';
import { AppBar } from './AppBar/AppBar';

export const App = () => {

  return (
    <ContainerGlobal>
    <AppBar/>
      <Routes>
        <Route exact path = "/" element ={<HomeView/>} />
        <Route path = "/register" element ={<RegisterView/>} />
        <Route path = "/login" element ={<LoginView/>} />
        <Route path = "/contacts" element ={<ContactsView/>} />

    </Routes>
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