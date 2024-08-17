import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventModal from './EventModal';

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
   @media (max-width: 768px) {
      font-size: 14px;
`;

const Day = styled.div`
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #333;

  p {
    margin: 0;
  }

  a {
    display: block;
    margin-top: 10px;
    padding: 5px;
    background-color: #af4261;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    font-size: 0.9em;
    cursor: pointer;
  }
`;

const Calendar = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  const daysInMonth = 30;

  return (
    <>
      <CalendarWrapper>
        {Array.from({ length: daysInMonth }, (_, index) => (
          <Day key={index}>
            <p>Day {index + 1}</p>
            {events
              .filter((event) => new Date(event.date).getDate() === index + 1)
              .map((event) => (
                <p key={event.id} onClick={() => openModal(event)}>{event.title}</p>
              ))}
          </Day>
        ))}
      </CalendarWrapper>
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </>
  );
};

export default Calendar;
