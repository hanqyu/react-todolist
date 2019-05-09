import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = (props) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                투-두리스트
            </div>
            <section className="palette-wrapper">
                {props.palette}
            </section>
            <section className="form-wrapper">
                {props.form}
            </section>
            <section className="todos-wrapper">
                {props.children}
            </section>
        </main>
    );
};

export default TodoListTemplate;
