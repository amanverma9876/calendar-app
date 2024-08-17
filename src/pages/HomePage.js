import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import Calendar from '../components/Calendar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 1em;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const HomePage = () => {
  const { events, filter, setFilter } = useContext(EventContext);
  
  return (
    <PageWrapper>
      <h1>Calendar</h1>
      <FilterWrapper>
        <Link to="/new" style={{ textDecoration: 'none', backgroundColor: '#61dafb', color: '#333', padding: '10px 20px', borderRadius: '5px' }}>Add Event</Link>
        <FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </FilterSelect>
      </FilterWrapper>
      <Calendar events={events} />
    </PageWrapper>
  );
};

export default HomePage;
