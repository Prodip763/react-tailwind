import React from "react";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return(
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl">Save most Your Money</h2>
            <p className="text-3xl">By giving your money to me!!!</p>
        </div>
    );
};

export default Header;