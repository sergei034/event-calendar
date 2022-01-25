import { useState } from 'react';
import { Form, Input, Button, Modal, Select, Row } from 'antd';

import { RULES } from '../../utils/formRules';

const AddEventModal = ({
  isLoading = false,
  isVisible = false,
  guests = [],
  handleClose,
  handleSubmit,
}) => {
  const [eventGuest, setEventGuest] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  return (
    <Modal
      title="Add Event"
      visible={isVisible}
      onCancel={handleClose}
      footer={null}
    >
      <Form
        name="add-event-form"
        onFinish={() =>
          handleSubmit({ eventGuest, eventDescription, eventDate })
        }
        autoComplete="off"
      >
        <Form.Item
          label="Event Guest"
          name="event-guest"
          rules={[RULES.required('Please enter name of the guest')]}
        >
          <Select onChange={guest => console.log(guest)}>
            {guests.map((guest, index) => (
              <Select.Option value={guest.username} key={index}>
                {guest.username}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Event Description"
          name="event-description"
          rules={[RULES.required('Please enter event description')]}
        >
          <Input
            value={eventDescription}
            onChange={e => setEventDescription(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Event Date"
          name="event-date"
          rules={[RULES.required('Please pick up event date')]}
        >
          <Select
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Row justify="center">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Add Event
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEventModal;
