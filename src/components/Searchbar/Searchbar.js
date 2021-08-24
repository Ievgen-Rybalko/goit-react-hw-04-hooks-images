import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

function Searchbar({ onQuerySubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
    setBtnDisabled(false);
  };

  const handleSubmit = e => {
    //console.log('submit btn pressed');
    e.preventDefault();
    const normalizedSearchQuery = searchQuery.trim();

    if (normalizedSearchQuery.length !== 0) {
      onQuerySubmit(searchQuery.trim());
    }

    setBtnDisabled(true);
  };

  return (
    <header className={styles.Searchbar}>
      <form className="SearchForm" onSubmit={handleSubmit}>
        {btnDisabled ? (
          <button
            type="submit"
            disabled
            className={styles.SearchForm__button_disabled}
          >
            <span>Search</span>
          </button>
        ) : (
          <button type="submit" className={styles.SearchForm__button}>
            <span>Search</span>
          </button>
        )}

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onQuerySubmit: PropTypes.func.isRequired,
};

export default Searchbar;
