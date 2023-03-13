import { selectFilter } from '../../redux/selectors';
import {
  default as PropTypes,
  Button,
  List,
  ListItem,
  RiContactsLine,
  RiDeleteBin6Line,
  useSelector,
} from '../../components';
import {
  useFetchAllQuery,
  useDeleteContactMutation,
} from '../../redux/contactAPI';

const ContactList = () => {
  const filterValue = useSelector(selectFilter);
  const { data: contacts = [], isError: fetchError } = useFetchAllQuery();

  const filteredList = () => {
    try {
      const loweredFilter = filterValue.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(loweredFilter)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [deleteContact, { isError: deleteError }] = useDeleteContactMutation();
  return (
    <>
      <List>
        {fetchError ||
          (deleteError && (
            <div style={{ color: 'red' }}>
              <p>Oooops ...</p>
              <p>Error ...</p>
            </div>
          ))}
        {filteredList().map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                <div>
                  <RiContactsLine color="color=#ffee7d" /> {name}: {number}
                </div>
                <Button
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  <RiDeleteBin6Line
                    style={{
                      fill: '#ffee7d',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                  Delete
                </Button>
              </ListItem>
            )
          );
        })}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};
export default ContactList;
