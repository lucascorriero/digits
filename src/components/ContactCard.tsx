'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

const ContactCard = ({ contact }: { contact: Contact }) => (
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
        </Card.Text>
      </Card.Body>
    </Card.Header>
  </Card>
);

export default ContactCard;
