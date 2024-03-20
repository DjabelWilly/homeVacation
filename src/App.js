import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";




const App = () => {



    return (
        <div>
            <Header />
            
            <Outlet/>
            

        </div>

    );
}

export default App;



