
import FilterDetails from './FilterDetails';
import {useState,useContext} from 'react';
import {StateDataContext} from '../App';
import {Link} from 'react-router-dom';
import '../static/style.css';


const ViewDefects = ()=>{

    const dataSet = useContext(StateDataContext);
    const defects = dataSet.defects;

    const [priority,setPriority] = useState('all');
    const [status,setStatus] = useState('all');
    const [catagory,setCatagory] = useState('all');

    const filteredDefects=defects.filter((defect)=>{
        if((priority=='all'||priority==defect.priority) && (status=='all'||status==defect.status) && (catagory=='all'||catagory==defect.catagory))
            return defect;
    })

    const closeTheDefect = (defect)=>{
        const updatedDefects = defects.map((item)=>item.id==defect.id?{...defect,status:'closed'}:item);
        dataSet.updateDefects(updatedDefects)
    }

    return(
        <div>
            <FilterDetails  setStatus={setStatus} setCatagory={setCatagory} setPriority={setPriority}/>
            <br/>
            <div style={{textAlign:'center'}}>
                <h2>Defect Details</h2>
                <h6 style={{color:'red'}}>Search Result : {filteredDefects.length}</h6>
                </div>
            <table className="table table-striped">
                <thead style={{backgroundColor:'#87CEEB'}}>
                    <tr>
                        <th>Defect Catagory</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDefects.map((defect)=>{
                        return(
                            <tr key={defect.id}>
                                <td>{defect.catagory}</td>
                                <td>{defect.description}</td>
                                <td>{defect.priority}</td>
                                <td>{defect.status}</td>
                                <td>
                                {defect.status=='closed'?'No action pending.':<Link onClick={()=>closeTheDefect(defect)}>Closed Status</Link>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
       
    )
}

export default ViewDefects;
