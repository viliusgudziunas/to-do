import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import './TodoList.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import TodoHeader from '../TodoHeader/TodoHeader';
import { fetchTodosAction } from '../../actions/todosActions';

const TodoList = () => {
  const [maxTodoId, setMaxTodoId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAction());
  }, [dispatch]);

  const todos = useSelector(state => state.todos.items);
  useEffect(() => {
    setMaxTodoId(Math.max(...todos.map(todo => todo.id)));
  }, [todos]);

  return (
    <Container className="TodoList-container">
      <TodoHeader />
      <NewTodoForm maxTodoId={maxTodoId} />
      <Container>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </Container>
    </Container>
  );
};

export default TodoList;
