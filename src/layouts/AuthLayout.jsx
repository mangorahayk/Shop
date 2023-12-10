import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";



function AuthLayout({children}){
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}


export default AuthLayout