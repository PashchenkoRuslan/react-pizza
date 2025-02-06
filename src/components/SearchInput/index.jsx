import React from 'react';
import styles from './SearchInput.module.scss';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

const SearchInput = () => {
  const { setSearchItems } = React.useContext(SearchContext);
  const [value, setValue] = React.useState('');

  const searchRef = React.useRef();

  const updateSeachItems = React.useCallback(
    debounce((str) => {
      setSearchItems(str);
    }, 250),
    [],
  );

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        clearButton();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSearch = (event) => {
    setValue(event.target.value);
    updateSeachItems(event.target.value);
  };

  const clearButton = () => {
    setSearchItems('');
    setValue('');
    searchRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Поиск пицц..."
        value={value}
        onChange={handleSearch}
        ref={searchRef}
      />
      <button className={styles.clear} onClick={clearButton}>
        X
      </button>
    </div>
  );
};

export default SearchInput;
