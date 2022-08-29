import React, { FC, useState } from 'react';

interface SearchProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="search"
        id="search"
        placeholder="Enter search term here"
        className="border p-3 grow"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        type="submit"
        className="p-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Search;
