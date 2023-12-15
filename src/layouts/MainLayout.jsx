import React from "react";
import Footer from "../components/Footer/Footer";

function MainLayout({children}){
    return(
        <div>
            {children}
            <Footer  />
        </div>
    )
}

export default MainLayout