import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

/* Pages */
const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const Services = lazy(() => import("./pages/Service/ServicesPage"));
const Project = lazy(() => import("./pages/Project/ProjectPage"));
const ProjectApp = lazy(() => import("./pages/Project/ProjectApp"));
const ProjectGame = lazy(() => import("./pages/Project/ProjectGame"));

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"


function App() {
    return (
        <>
            <RouterScrollTop />
            <Suspense fallback={
                <div className='loading-pag'>
                    <div className="loader">
                        <span>=(NEERAJ)=></span>
                        <span>=(NEERAJ)=></span>
                    </div>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/service" element={<Services />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/project/app" element={<ProjectApp />} />
                    <Route path="/project/game" element={<ProjectGame />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default App
