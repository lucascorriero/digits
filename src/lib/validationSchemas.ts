import * as Yup from 'yup';

export const AddContactSchema = Yup.object({
  id: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

export const AddNoteSchema = Yup.object({
  note: Yup.string().required('Note is required'),
  contactId: Yup.number().required('Contact ID is required'),
  owner: Yup.string().required('Owner is required'),
});

export const EditContactSchema = Yup.object({
  id: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

export interface Contact {
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
}
