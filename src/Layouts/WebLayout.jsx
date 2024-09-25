
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'
const WebLayout=()=>{

    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default WebLayout
