import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <>
        <h2>EcoTrack</h2>
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/logs">Logs</Link>
            <Link to="/login">Login</Link>
            <Link to="/support">Support</Link>
        </nav>
        </>
    )
};

export default Header;