'use client';

import { Card } from 'react-bootstrap';

const ContactCard = ({ contact }: Contact) => (
  <Card>
    <Card.Header>
      <Image src = {contact.image} width = {75} />
    </Card.Header>
  </Card>
);

export default ContactCard;
