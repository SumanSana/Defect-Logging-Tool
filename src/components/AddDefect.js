import React from 'react';
import {useRef,useContext} from 'react';
import { StateDataContext } from '../App';
import {useNavigate} from 'react-router-dom';
import '../static/style.css'

const AddDefect = ()=>{

    const catagoryRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();
    const navigate = useNavigate();

    const dataSet = useContext(StateDataContext);

    const onSubmit = (event)=>{
        event.preventDefault();
        const id=dataSet.defects.length+1;
        const catagory = catagoryRef.current.value;
        const description = descriptionRef.current.value;
        const priority = priorityRef.current.value;
        const status = 'open';
        const newDefects = [...dataSet.defects,{id,catagory,description,priority,status}];
        console.log(newDefects);
        dataSet.updateDefects(newDefects);
        navigate("/view");
    }

    return(   
        <div className="card display-center">
            <div className="card-header">
                <h2 style={{textAlign:'center'}}>Add Defect</h2>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="catagory">Defect Catagory</label>
                        <select className="form-select" id="catagory" ref={catagoryRef}>
                            <option value="UI">UI</option>
                            <option value="Functional">Functional</option>
                            <option value="Change Request">Change Request</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="3" ref={descriptionRef}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <input type="number" className="form-control" id="priority" ref={priorityRef}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddDefect;