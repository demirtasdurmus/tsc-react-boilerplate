import React, { useRef } from "react";
import "./NewTodo.css"


type NewTodoProps = {
    addNewTodo: (todo: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.addNewTodo(textRef.current!.value)
        textRef.current!.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="newTodo">New Todo</label>
                <input id="newTodo" type="text" ref={textRef} />
            </div>
            <button type="submit">ADD</button>
        </form>
    )
}
export default NewTodo;