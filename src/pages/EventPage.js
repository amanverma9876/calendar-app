import React from 'react';
import styled from 'styled-components';
import EventForm from '../components/EventForm';
import EventDetails from '../components/EventDetails';
import { useParams } from 'react-router-dom';

const PageWrapper = styled.div`
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
`;

const EventPage = () => {
  const { id } = useParams();
  return (
    <PageWrapper>
      {id ? <EventDetails /> : <EventForm />}
    </PageWrapper>
  );
};

export default EventPage;
