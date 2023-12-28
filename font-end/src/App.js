import React from 'react'
import './App.css';
import About from './template/pages/About/About';
import MasterLayout from './template/layout/MasterLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './template/pages/Home/Home';
import Login from './template/pages/Login/Login';
import Register from './template/pages/Register/Register';
import ListProduct from './template/pages/ListProduct/ListProduct';
import Contact from './template/pages/Contact/Contact';
import Profile from './template/pages/Profile/Profile';
import Detail from './template/pages/Detail/Detail';
import SetNewPassword from './service/SetNewPassword';
import VerifyEmail from './service/VerifyEmail';
import ForgotPassword from './template/pages/ForgotPassword/ForgotPassword';
import Cart from './template/pages/Cart/Cart';



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MasterLayout Page={<Home />} />} />
                <Route path='/about' element={<MasterLayout Page={<About />} />} />
                <Route path='/login' element={<MasterLayout Page={<Login />} />} />
                <Route path='/register' element={<MasterLayout Page={<Register />} />} />
                <Route path='/shop' element={<MasterLayout Page={<ListProduct />} />} />
                <Route path='/contact' element={<MasterLayout Page={<Contact />} />} />
                <Route path='/profile' element={<MasterLayout Page={<Profile />} />} />
                <Route path='/detail/:id' element={<MasterLayout Page={<Detail />} />} />
                <Route path='/verifyEmail' element={<MasterLayout Page={<VerifyEmail />} />} />
                <Route path='redirect/setnewpassword' element={<MasterLayout Page={<SetNewPassword />} />} />
                <Route path='/forgotPassword' element={<MasterLayout Page={<ForgotPassword />} />} />
                <Route path='/cart' element={<MasterLayout Page={<Cart />} />} />

            </Routes>

        </div>
    );
}

export default App;
