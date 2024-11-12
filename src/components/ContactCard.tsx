'use client';

import Link from 'next/link';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from './AddNoteForm';

const ContactCard = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
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
          <ListGroup variant="flush">
            {notes.map((note) => <NoteItem key={note.id} note={note} />)}
          </ListGroup>
          <AddNoteForm contact={contact} />
        </Card.Text>
      </Card.Body>
    </Card.Header>
    <Card.Footer>
      <Link href={`edit/${24}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
