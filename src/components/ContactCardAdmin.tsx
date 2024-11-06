'use client';

import { Contact } from '@prisma/client';
import { Card, Image } from 'react-bootstrap';

const ContactCardAdmin = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
      <Card.Body>
        <Card.Text>
          {contact.description}
          <p className="blockqoute-footer">{contact.owner}</p>
        </Card.Text>
      </Card.Body>
    </Card.Header>
  </Card>
);

export default ContactCardAdmin;
