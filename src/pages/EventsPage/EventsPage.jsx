import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Calendar, Layout, Row } from 'antd';

import AddEventModal from '../../components/AddEventModal/AddEventModal';
import Notification from '../../components/Notification';
import Spinner from '../../components/Spinner';
import { NOTIFICATION_TYPES, STATUS } from '../../utils/constants';
import './EventsPage.css';
import { EVENTS_ACTION_CREATORS } from '../../store/reducers/eventsReducer/eventsActions';

const EventsPage = () => {
  const dispatch = useDispatch();

  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const error = useSelector(state => state.events.error);
  const events = useSelector(state => state.events.events);
  const users = useSelector(state => state.events.users);
  const status = useSelector(state => state.events.status);
  const isLoading = status === STATUS.LOADING;

  useEffect(() => {
    dispatch(EVENTS_ACTION_CREATORS.getEventsRequest());
    dispatch(EVENTS_ACTION_CREATORS.getUsersRequest());
  }, [dispatch]);

  const handleAddEvent = () => {
    console.log('ADD EVENT');
    // dispatch(EVENTS_ACTION_CREATORS.addEventRequest(event));
  };

  return (
    <Layout.Content>
      <Row className="events-page" justify="center" align="middle">
        <AddEventModal
          guests={users}
          isLoading={isLoading}
          isVisible={showAddEventModal}
          handleClose={() => setShowAddEventModal(false)}
          handleSubmit={handleAddEvent}
        />

        {isLoading && <Spinner />}
        {error && (
          <Notification type={NOTIFICATION_TYPES.ERROR} message={error} />
        )}
        <Calendar />
        <Button
          className="add-button"
          type="primary"
          onClick={() => setShowAddEventModal(true)}
        >
          Add Event
        </Button>
      </Row>
    </Layout.Content>
  );
};

export default EventsPage;
