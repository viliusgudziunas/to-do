import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import './TodoList.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import TodoHeader from '../TodoHeader/TodoHeader';
import { fetchTodosAction } from '../../actions/todosActions';
import { setUserIdAction } from '../../actions/userActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const [maxTodoId, setMaxTodoId] = useState(0);

  useEffect(() => {
    dispatch(setUserIdAction(1));
  }, [dispatch]);

  const userId = useSelector(state => state.userId.userId);

  useEffect(() => {
    dispatch(fetchTodosAction(userId));
  }, [dispatch, userId]);

  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    setMaxTodoId(Math.max(...todos.map(todo => todo.id)));
  }, [todos]);

  return (
    <Container className="TodoList-container">
      <TodoHeader />
      <NewTodoForm maxTodoId={maxTodoId} />
      <Container className="TodoList-todos-container">
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </Container>
    </Container>
  );
};

export default TodoList;
