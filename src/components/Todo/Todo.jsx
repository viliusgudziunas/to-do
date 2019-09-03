import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import './Todo.css';
import PropTypes from 'prop-types';
import { completeTodoAction } from '../../actions/todosActions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [className, setClassName] = useState('Todo-button');

  const handleButtonClick = () => {
    if (className === 'Todo-button') {
      dispatch(completeTodoAction(todo));
      setClassName(`${className} Todo-button-completed`);
    } else {
      setClassName('Todo-button');
    }
  };

  console.log(todo);

  return (
    <Row>
      <Button className={className} onClick={handleButtonClick}>
        {todo.name}
      </Button>
    </Row>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};
