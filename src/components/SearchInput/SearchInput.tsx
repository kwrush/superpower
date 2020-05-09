import React, { FC, useCallback, KeyboardEvent } from 'react';

const ENTER_KEY_CODE = 13;

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        onSearch(e.currentTarget.value);
      }
    },
    [onSearch],
  );

  return (
    <div>
      <input placeholder="Search for heros" onKeyUp={handleKeyUp} />
    </div>
  );
};

export default SearchInput;
