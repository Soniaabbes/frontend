import './App.css';
import Acceuil from './Pages/Acceuil/Acceuil';
import '../src/Pages/Acceuil/Acceuil.css'


import NavBar from './Pages/NavBar/NavBar';

import Apropos from './Pages/Apropos/Apropos';
import Rendev from './Pages/Rendev/Rendev';
import Trouvezmed from './Pages/TrouvezMed/trouvezmed'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProfileMedecin from './Pages/ProfilMedcin/ProfileMedecin';
import ProfilPatient from './Pages/ProfilPatient/ProfilPatient';
import NotFound from './Pages/NotFound';

import ProfilCommercialPharm from './Pages/ProfilCommercialPharm/ProfilCommercialPharm';
import {useEffect} from 'react';
import {currentUser} from './Redux/AuthSlice';
import {useDispatch} from 'react-redux';
import PrivateRoutes from './Pages/PrivateRoutes';
import CardMedecin from "./Pages/CardAllUsers/Cardmedecin"
import CardCommercial from './Pages/CardAllUsers/CardCommercial'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './Pages/AdminPage/AdminPage';
import CardPatient from './Pages/CardAllUsers/CardPatient';
import ListeRdv from './Pages/EditerRDv/ListeRdv'


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(currentUser());
        }
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path='/'
                        element={<Apropos/>}/>
                    <Route path='/signIn'
                        element={<Acceuil/>}/>
                    <Route path='/RDV'
                        element={
                            <PrivateRoutes><Rendev/></PrivateRoutes>
                        }/>

                    <Route path='/profileMedecin'
                        element={
                            <PrivateRoutes><ProfileMedecin/></PrivateRoutes>
                        }/>
                         <Route path='/profilAdmin'
                        element={
                            <PrivateRoutes><AdminPage/></PrivateRoutes>
                        }/>
                    <Route path='/chercheMed'
                        element={<Trouvezmed/>}/>
                    <Route path='/profilPatient'
                        element={
                            <PrivateRoutes><ProfilPatient/></PrivateRoutes>
                        }/>
                    <Route path='/profilCommercialPharm'
                        element={
                            <PrivateRoutes><ProfilCommercialPharm/></PrivateRoutes>
                        }/>
                         <Route path='/listeRDVdoc'
                        element={
                            <PrivateRoutes><ListeRdv/></PrivateRoutes>
                        }/>
                       
                    <Route path='*'
                        element={<NotFound/>}/>
                        <Route path='/cardMed' element={< CardMedecin/>}/>
                        <Route path='/cardPatient' element={< CardPatient/>}/>
                        <Route path='/cardCommercial' element={< CardCommercial/>}/>
                </Routes>

                <ToastContainer position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"/>
            </div>
        </BrowserRouter>


    );

}
export default App;
