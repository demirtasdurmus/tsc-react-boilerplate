import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

interface TodoListProps {
    items: { id: string, text: string }[];
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <TodoItem key={item.id} item={item} deleteTodo={props.deleteTodo} />
            ))}
        </ul>
    )
}

export default TodoList;