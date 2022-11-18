const FilterDetails = ({setStatus,setCatagory,setPriority})=>{

    return(
        <div>
            <hr/>
            <h2 style={{textAlign:'center'}}>Filter Details</h2>
            <div className="card display-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select className="form-select" id="catagory" onChange={(event)=>setPriority(event.target.value)}>
                                <option value="all">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Catagory</label>
                            <select className="form-select" id="catagory" onChange={(event)=>setCatagory(event.target.value)}>
                                <option value="all">All</option>
                                <option value="UI">UI</option>
                                <option value="Functional">Functional</option>
                                <option value="Change Request">Change Request</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select className="form-select" id="status" onChange={(event)=>setStatus(event.target.value)}>
                                <option value="all">All</option>
                                <option value="open">Open</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default FilterDetails;