import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

function TagDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    const genre = localStorage.getItem('genre');
    props.setGenre(genre);
  }, [props]);

  function onClickGenreHandler(genre) {
    localStorage.setItem('genre', genre);
    props.setGenre(genre);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="w-100 bg-light">
        {props.genre || 'タグを選択してください'}
      </DropdownToggle>
      <DropdownMenu right className="w-100">
        {['生活', '動物', '食べ物', '人間関係', 'ゲーム', 'アニメ', '仕事', '雑学', '技術'].map((genre) => {
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
  genre: PropTypes.string,
  setGenre: PropTypes.func,
};

export default TagDropdown;
