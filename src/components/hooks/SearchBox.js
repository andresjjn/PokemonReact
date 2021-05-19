import { useState } from 'react';

export default function SearchBox ({ onClose, onSearch }) {
  const [searchText, setSearchText] = useState('');
  return (
    <div className='search-box'>
      <div className='container'>
        <input
          type='text'
          placeholder='Search a Pokemon!'
          value={searchText}
          onChange={({ target: { value } }) => {
            setSearchText(value);
            onSearch(searchText);
          }}
          onClick={() => {
            setSearchText('');
            onSearch(searchText);
          }}
          className='search-box-input'
        />
        <div className='search' />
      </div>
    </div>
  );
}
