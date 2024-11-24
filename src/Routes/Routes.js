import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Views/Home/Home"
import NoPage from "../noPage";
import Repo from "../Views/Repo/Repo";

const MainRoutes = (props) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/repo" element={<Repo/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    )
}
export default MainRoutes;