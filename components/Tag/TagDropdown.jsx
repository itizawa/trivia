import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupButtonDropdown,
} from 'reactstrap';

function TagDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    const genre = localStorage.getItem('genre');
    if (genre != null) {
      props.setGenre(genre);
    }
    props.setGenre('生活');
  }, [props]);

  function onChangeGenreHandler(genre) {
    localStorage.setItem('genre', genre);
    props.setGenre(genre);
  }

  const defaultGenre = [
    '生活', '動物', '食べ物', '人間関係', 'ゲーム', 'アニメ', '仕事', '雑学', '技術',
  ];

  return (
    <InputGroup>
      <Input
        value={props.genre}
        disabled={defaultGenre.includes(props.genre)}
        onChange={e => onChangeGenreHandler(e.target.value)}
      />
      <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className="bg-light">
          ジャンルを変える
        </DropdownToggle>
        <DropdownMenu right>
          {[...defaultGenre, 'その他'].map((genre) => {
              return (
                <DropdownItem key={genre} onClick={() => onChangeGenreHandler(genre)}>
                  {genre}
                </DropdownItem>
              );
            })}
        </DropdownMenu>
      </InputGroupButtonDropdown>
    </InputGroup>
  );
}

TagDropdown.propTypes = {
  genre: PropTypes.string,
  setGenre: PropTypes.func,
};

export default TagDropdown;
