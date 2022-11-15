import React from "react"
import Cart from "./Cart"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import CheckOut from "./CheckOut"
import Saved from "./Saved"
import Account from "./Account"
import Categories from "./Categories"
import Store from "./Store"
import SignUp from "./SignUp"
import Login from "./Login"
import ComputerAndGadjets from "./ComputerAndGadjets"
import Address from "./Address"

const Main = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/computerandgadjets" element={<ComputerAndGadjets />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/Address" element={<Address />} />

                </Routes>
            </div>
        </Router>  
    );
}

export default Main;
