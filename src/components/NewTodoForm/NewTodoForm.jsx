import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';
import './NewTodoForm.css';
import PropTypes from 'prop-types';
import { addTodoAction } from '../../actions/todosActions';

const NewTodoForm = ({ maxTodoId }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodoAction({ id: maxTodoId + 1, name: newTodo, completed: false })
    );
    setNewTodo('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formNewTodo">
        <Form.Label column sm="auto" className="NewTodoForm-form-label">
          New ToDo:
        </Form.Label>
        <Col>
          <Form.Control
            sm="auto"
            placeholder="New ToDo"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default NewTodoForm;

NewTodoForm.propTypes = {
  maxTodoId: PropTypes.number.isRequired
};
