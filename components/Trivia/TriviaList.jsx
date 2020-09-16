import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import InfiniteScroll from 'react-infinite-scroller';

import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';
import { useTriviaList } from '../Fooks/swrApi';

function TriviaListBlock(props) {
  const [triviaForModal, setTriviaForModal] = useState(null);

  let url;
  if (props.tagId != null) {
    url = `/tags/${props.tagId}/pages`;
  }
  else {
    url = '/trivias/list';
  }
  const { data, error } = useTriviaList(`${url}?page=${props.index}`, props.index);
  /**
   * open trivia modal
   * @param {string} id id of trivia
   */
  function onClickTriviaCard(id) {
    setTriviaForModal(id);
  }

  /**
   * close trivia modal
   * @param {string} id id of trivia
   */
  function onCloseModal() {
    setTriviaForModal(null);
  }

  if (error) return <div>failed to load</div>;

  if (!data) {
    const Skeletons = [];

    for (let index = 0; index < 10; index++) {
      Skeletons.push(<Skeleton key={index} className="box-fix-aspect mb-3" />);
    }

    return (
      <>
        {Skeletons}
      </>
    );
  }

  const triviasList = data?.docs;

  return (
    <>
      {triviasList.map((trivia) => {
        return (
          <div className="mb-3" key={trivia._id}>
            <TriviaCard trivia={trivia} onClickTriviaCard={onClickTriviaCard} />
            <TriviaModal trivia={trivia} isOpen={triviaForModal === trivia._id} onClose={onCloseModal} />
          </div>
        );
      })}
    </>
  );
}

function TriviaList(props) {


  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let i = 0; i < activePage; i++) {
    pages.push(<TriviaListBlock index={i + 1} key={i} props={props} />);
  }


  return (
    <>
      {/* <InfiniteScroll
        pageStart={1}
        loadMore={loadFunc}
        hasMore
        loader={<div className="loader" key={0}>Loading ...</div>}
      > */}
      {pages}
      <button onClick={() => setActivePage(activePage + 1)}>hogehoge></button>
      {/* </InfiniteScroll> */}
    </>
  );

}

TriviaListBlock.propTypes = {
  tagId: PropTypes.string,
  index: PropTypes.number,
};

export default TriviaList;
