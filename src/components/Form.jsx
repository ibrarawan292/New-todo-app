import { useState } from "react";
import ToDoList from "./TodoList";



const FormData = () => {

    const [title, setTitle] = useState('')
    const [description, setDescrtiption] = useState('')

    const [listItems, setListItems] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.floor(Math.random() * Date.now()),
            title: title,
            description: description
        }

        setListItems([...listItems, newItem])
      
           console.log(newItem)
    }



    return (


        <div className="todo-input">

            <div className="container">
                <div className="todo-input-inner">

                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label className="form-label">ToDo Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ToDo Title" onChange={e => setTitle(e.target.value)} />
                        <label className="form-label">ToDo Description</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Description" onChange={e => setDescrtiption(e.target.value)} />
                        <button type="submit" className="form-control bnt btn-primary p-3 mt-3">SAVE ToDo</button>
                    </form>
                  <ToDoList />
                </div>

            </div>

        </div>
    );
}

export default FormData;





