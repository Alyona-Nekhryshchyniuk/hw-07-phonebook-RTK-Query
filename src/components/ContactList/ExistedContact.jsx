import { ListItem } from './List.styled';
import { Button, RiContactsLine, RiDeleteBin6Line } from '../../components';
import { useDeleteContactMutation } from '../../redux/contactAPI';

export const ExistedContact = ({ name, id, number }) => {
  const [deleteContact, { error: deleteError, isLoading }] =
    useDeleteContactMutation();

  return (
    <>
      <ListItem>
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
          {isLoading ? 'Wait ...' : 'Delete'}
        </Button>
      </ListItem>
      {deleteError && (
        <p style={{ color: 'red' }}>Oops ... Unsuccessful deleting((</p>
      )}
    </>
  );
};
