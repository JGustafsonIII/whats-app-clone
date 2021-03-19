import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../context/ContactsProvider';

const Contacts = () => {
  const { contacts } = useContacts();

  const renderedList = contacts.map((contact) => (
    <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
  ));

  return <ListGroup variant='flush'>Contacts{renderedList}</ListGroup>;
};

export default Contacts;
