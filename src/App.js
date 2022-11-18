import React from 'react';
import Login from './components/Login'
import Header from './components/Header'
import {useState,createContext,useEffect} from 'react';
import {Link,Outlet} from 'react-router-dom';

const StateDataContext = createContext();

const App = ()=>{

    const [defects,updateDefects]=useState([
        {
            id:1,
            catagory:'UI',
            description:'Submit button is not working.',
            priority:2,
            status:'open'
        },
        {
            id:2,
            catagory:'Functional',
            description:'While submitting the data a confirmation pop-up should appear.',
            priority:1,
            status:'open'
        },
        {
            id:3,
            catagory:'Change Request',
            description:'Add Remove user functionality.',
            priority:3,
            status:'closed'
        }
    ]);

    const [authenticated,setAuthenticate] = useState(false);
    
    

    const validateLogin = (username,password)=>{
        if(username!='' && password!='')
            setAuthenticate(true);
        else
            alert("Please eneter correct username and password");

    }

    if(!authenticated){
        return(
            <div>
                <Login validateLogin={validateLogin}/>
            </div>
        )
    }else{
        return(
            <div>
            <StateDataContext.Provider value={{defects,updateDefects,authenticated,setAuthenticate}}>
                <Header/>
                <br/><br/>
                <Outlet/>
            </StateDataContext.Provider>
            </div>
        )
    }
    
}

export default App;
export {StateDataContext};