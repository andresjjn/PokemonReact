import { useState, useRef } from 'react';

export default function SearchBox ({ onClose, onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [click, setClick] = useState(true);
  const list = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  return (
    <div
      ref={list}
      className='search-box'
      onClick={() => {
        if (click) {
          onSearch('');
          setClick(!click);
        } else {
          onSearch('close');
          setClick('click');
        }
      }}
    >
      <div className='container'>
        <input
          type='text'
          placeholder='Search a Pokemon!'
          value={searchText}
          onChange={
            ({ target: { value } }) => {
              scrollToRef(list);
              setSearchText(value);
              onSearch(searchText);
            }
          }
          className='search-box-input'
        />
        <div className='search' />
      </div>
    </div>
  );
}
