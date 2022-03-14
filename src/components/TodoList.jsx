import { Link } from "react-router-dom";


const ToDoList = () => {



    return (


        <div className="container">
            <div className="my-todo-list">
                <div className="tod-list-inner">
                    <div className="left-col">
                        <Link to={''}><h1>{}</h1></Link>

                        {/* <span className={`badge bg-${todo.status === 'completed' ? 'success' : 'danger'}`}>{todo.status}</span> */}
                    </div>
                    <div className="right-col">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default ToDoList;