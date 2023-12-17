import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";



function AuthLayout({children}){
    return(
        <div>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


export default AuthLayout