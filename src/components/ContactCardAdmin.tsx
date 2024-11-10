'use client';

import { Contact, Note } from '@prisma/client';
import { Card, Image, ListGroup } from 'react-bootstrap';
import NoteItem from '@/components/NoteItem';

const ContactCardAdmin = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
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
        <ListGroup variant="flush">
          {notes.map((note) => <NoteItem key={note.id} note={note} />)}
        </ListGroup>
      </Card.Body>
    </Card.Header>
  </Card>
);

export default ContactCardAdmin;
