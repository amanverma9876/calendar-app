import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'; 

const FormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #af4261;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #f3ec78;
    color: #333;
  }
`;

const EventForm = ({ existingEvent }) => {
  const { addEvent, editEvent } = useContext(EventContext);
  const [title, setTitle] = useState(existingEvent ? existingEvent.title : '');
  const [date, setDate] = useState(existingEvent ? existingEvent.date : '');
  const [category, setCategory] = useState(existingEvent ? existingEvent.category : 'Work');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: existingEvent ? existingEvent.id : Date.now(),
      title,
      date,
      category,
    };

    if (existingEvent) {
      editEvent(event);
    } else {
      addEvent(event);
    }
    navigate('/')
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </Select>
        <Button type="submit">Save</Button>
      </form>
    </FormWrapper>
  );
};

export default EventForm;
