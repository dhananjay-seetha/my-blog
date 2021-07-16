import { Link } from 'react-router-dom' ;
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Share-Dot</h1>
            <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/create" style = {{
                color: "white" ,
                backgroundColor: "#f1356d" ,
                borderRadius : "8px" 
            }}> New Blog </Link>
                 </div>
        </nav>
     );
}
 
export default Navbar;