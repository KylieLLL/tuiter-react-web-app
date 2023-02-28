import React from "react";
import TuitsList from "../tuits/index";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <div className="">
                <h4>Home</h4>
                <WhatsHappening/>
                <TuitsList/>
            </div>
        </div>
    );
}

export default HomeComponent;