import {Link,Outlet} from 'react-router-dom';
import {StateDataContext} from '../App';
import {useContext} from 'react';
import '../static/style.css'


const Header = ()=>{

    const dataSet = useContext(StateDataContext);


    const LoggedOut = ()=>{
        dataSet.setAuthenticate(false);
        alert("Logged out successfully");
    }

    return(  
        <>
            <nav style={{textAlign:'center' }}>
                <Link to="add" className="content-spacing">Add Defect</Link>
                <Link to="view" className="content-spacing">View Defects</Link>
                <Link className="content-spacing" onClick={LoggedOut}>Log Out</Link>
            </nav>        
        </>
        
    )
}

export default Header;