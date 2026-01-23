import React from 'react'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Home = lazy(() => import("../Pages/User/Home.jsx"))



function MainRouter() {
  return (
    <Suspense fallback={ <div>loading ...</div>}>
        <Routes>
            <Route path ='/' element = {<Home/>}/>
        </Routes>
    </Suspense>
    
  )
}

export default MainRouter ;
