import React from "react";
import "./TodoList.css"

interface TodoItemProps {
    item: { id: string, text: string };
    deleteTodo: (id: string) => void;
}


const TodoItem: React.FC<TodoItemProps> = (props) => {

    const handleDelete = (id: string) => {
        props.deleteTodo(id);
    }

    return (
        <li>
            {props.item.text}
            <button onClick={handleDelete.bind(null, props.item.id)}>DELETE</button>
        </li>
    )
}
export default TodoItem;