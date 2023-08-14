//componentes
import { Header } from "../components/header";
import { Banner } from "../components/banner";
//pages
import { Home } from "./home";
//router dom
import { Routes,Route } from "react-router-dom";


export const MainRoutes = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>        
        </>
    )
}