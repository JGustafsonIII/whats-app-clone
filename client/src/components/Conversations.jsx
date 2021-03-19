import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../context/ConversationsProvider';
const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();

  const renderedList = conversations.map((conversation, index) => (
    <ListGroup.Item
      key={index}
      action
      active={conversation.selected}
      onClick={() => selectConversationIndex(index)}
    >
      {conversation.recipients.map((recipient) => recipient.name).join(', ')}
    </ListGroup.Item>
  ));

  return <ListGroup variant='flush'>{renderedList}</ListGroup>;
};

export default Conversations;
