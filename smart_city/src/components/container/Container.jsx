import { Outlet } from "react-router-dom";
import "./Container.css";


function Container() {
    return (
        <div id="container">
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Container;