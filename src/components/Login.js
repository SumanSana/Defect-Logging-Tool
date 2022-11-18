import React from 'react';
import '../static/style.css';


const Login = ({validateLogin})=>{
    const handleSubmit = ()=>{
        validateLogin(document.getElementById('username').value, document.getElementById('password').value);
    }

    return(
        <div className="card display-center" style={{width:'500px'}}>
            <div className="card-header">
                <h2 style={{textAlign:'center'}}>Sign In</h2>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Enter Username</label>
                        <input type="text" id="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" id="password" className="form-control"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;