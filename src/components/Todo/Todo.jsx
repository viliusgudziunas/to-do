import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import './Todo.css';
import PropTypes from 'prop-types';
import {
  completeTodoAction,
  undoTodoAction,
  deleteTodoAction
} from '../../actions/todosActions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [className, setClassName] = useState('Todo-complete-button');

  const handleButtonClick = () => {
    if (className === 'Todo-complete-button') {
      dispatch(completeTodoAction(todo));
      setClassName(`${className} Todo-button-completed`);
    } else {
      dispatch(undoTodoAction(todo));
      setClassName('Todo-complete-button');
    }
  };

  return (
    <Row className="Todo-row">
      <Button className={className} onClick={handleButtonClick}>
        {todo.title}
      </Button>
      <Button
        variant="danger"
        className="Todo-delete-button"
        onClick={() => dispatch(deleteTodoAction(todo))}
      >
        X
      </Button>
    </Row>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};
