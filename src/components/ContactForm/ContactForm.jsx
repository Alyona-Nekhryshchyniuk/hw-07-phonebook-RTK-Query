import {
  default as PropTypes,
  Form,
  Button,
  Input,
  Label,
  BsFillTelephonePlusFill,
  useState,
} from '../../components';

import {
  useFetchAllQuery,
  usePostContactMutation,
} from '../../redux/contactAPI';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchAllQuery();
  const inputChange = ({ target }) => {
    if (target.name === 'name') return setName(target.value);
    setNumber(target.value);
  };

  const [postContact, { isLoading }] = usePostContactMutation();
  return (
    <Form
      color="#ffee7d"
      onSubmit={e => {
        e.preventDefault();
        if (contacts.find(obj => obj.name === name)) {
          alert(`${name} is already in contacts`);
        } else {
          const fn = async () => {
            const postResult = await postContact({ name, number });

            if (postResult?.error) {
              alert('Ooops ... You have some problems with adding contact((');
            } else {
              setName('');
              setNumber('');
            }
          };
          fn();
        }
      }}
    >
      <Label>
        Name:{' '}
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
      </Label>
      <Label>
        Number:{' '}
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
      </Label>
      <Button type="submit">
        {' '}
        <BsFillTelephonePlusFill /> {isLoading ? 'Loading ...' : 'Add contacts'}
      </Button>
    </Form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export { ContactForm as default };
