import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EventContext } from '../context/EventContext';

const DetailsWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
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
  }
`;

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <DetailsWrapper>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={() => {
        deleteEvent(event.id);
        navigate('/');
      }}>Delete</button>
    </DetailsWrapper>
  );
};

export default EventDetails;
