import { FC } from 'react';

import { Search } from './';

interface HeaderProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ onSearch }) => (
  <div className="w-full md:w-96 flex items-center flex-col mb-10">
    <h1 className="text-2xl font-bold mb-6">BROWSE PICTURES</h1>
    <Search onSearch={onSearch}></Search>
  </div>
);

export default Header;
