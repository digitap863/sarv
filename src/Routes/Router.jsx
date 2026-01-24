import React from 'react'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Home = lazy(() => import("../Pages/User/Home.jsx"))
const Loader = lazy(() => import("../Pages/User/Loader.jsx"))



function MainRouter() {
  return (
    <Suspense fallback={ <Loader />}>
        <Routes>
            <Route path ='/' element = {<Home/>}/>
        </Routes>
    </Suspense>
    
  )
}

export default MainRouter ;
