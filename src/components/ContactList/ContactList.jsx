import { selectFilter } from '../../redux/selectors';
import { List, useSelector } from '../../components';
import { useFetchAllQuery } from '../../redux/contactAPI';
import { ExistedContact } from './ExistedContact';

const ContactList = () => {
  const filterValue = useSelector(selectFilter);
  const { data = [], error: fetchError, isLoading } = useFetchAllQuery();

  const filteredList = () => {
    const loweredFilter = filterValue.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(loweredFilter)
    );
  };

  return (
    <>
      <List>
        {isLoading && <p>Loading ...</p>}
        {fetchError && (
          <div style={{ color: 'red' }}>
            <p>Oooops ...</p>
            <p>Contacts're trapped on the server ((</p>
          </div>
        )}

        {filteredList().map(({ name, id, number }) => (
          <ExistedContact name={name} id={id} number={number} key={id} />
        ))}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
