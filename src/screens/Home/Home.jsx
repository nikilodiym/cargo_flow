import React from "react";
import Banner from "./component/Banner";
import Types from "./component/Types";
import HowItWorks from "./component/HowItWorks";
import Why from "./component/Why";

function Home() {
    return(
        <>
            <Banner />
            <Types />
            <HowItWorks />
            <Why />
        </>
    )
}

export default Home;