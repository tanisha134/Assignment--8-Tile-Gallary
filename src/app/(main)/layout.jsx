import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ( {children} ) => {
    return(
        <>
        <Navbar />
        <Banner />
        {children}
        <Footer />
        </>
    )
}

export default MainLayout;