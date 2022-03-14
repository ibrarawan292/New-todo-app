



const TopStrip = (props) => {
    const listLength = props.listItems
   
    return (
     <div className="top-strip-section">
            <div className="container">
            <div className="top-strip-inner">
                <div className="top-strip-left-col">
                    <h1>Todo List</h1>
                </div>
                <div className="top-strip-right-col">
                    <h1>Total Todos are {listLength.length}</h1>
                    
                </div>
            </div>
        </div>
        
     </div>
    );
}
 
export default TopStrip;