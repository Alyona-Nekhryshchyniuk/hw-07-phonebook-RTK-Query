import {
  default as PropTypes,
  Input,
  useDispatch,
  useSelector,
  setFilterValue,
} from '../../components';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name <br />
      <Input
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
        // All state goes to useSelector(), not only filter!
        value={useSelector(selectFilter)}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
