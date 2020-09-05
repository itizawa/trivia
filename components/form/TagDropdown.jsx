import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

function TagDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    const genre = localStorage.getItem('selectedGenre');
    props.setSelectedGenre(genre);
  }, [props]);

  function onClickGenreHandler(genre) {
    localStorage.setItem('selectedGenre', genre);
    props.setSelectedGenre(genre);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="w-100 bg-light">
        {props.selectedGenre || 'タグを選択してください'}
      </DropdownToggle>
      <DropdownMenu right className="w-100">
        {['生活', 'ゲーム', '動物', '食べ物', '人間関係', 'アニメ', '仕事'].map((genre) => {
          return (
            <DropdownItem key={genre} onClick={() => onClickGenreHandler(genre)}>
              {genre}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

TagDropdown.propTypes = {
  selectedGenre: PropTypes.string,
  setSelectedGenre: PropTypes.func,
};

export default TagDropdown;
