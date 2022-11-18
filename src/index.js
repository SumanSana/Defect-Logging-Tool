import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddDefect from './components/AddDefect';
import ViewDefects from './components/ViewDefects';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<ViewDefects/>}/>
                <Route path="add" element={<AddDefect/>}/>
                <Route path="view" element={<ViewDefects/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
