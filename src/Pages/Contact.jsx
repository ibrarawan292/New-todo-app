



const Contact = () => {
    return (
        <div>
            <div className="container">
            <form>
                        <label className="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="ToDo Title"/>
                        <label className="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Description"/>
                        <label className="form-label">Email</label>
                        <input type="text" class="form-control" placeholder="Description"/>
                        <label className="form-label">Phone</label>
                        <input type="text" class="form-control" placeholder="Description"/>
                       <button type="submit" className="form-control bnt btn-danger p-3 mt-3">Submit</button>
                    </form>
            </div>
        </div>
    );
}
 
export default Contact
