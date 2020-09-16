import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import InfiniteScroll from 'react-infinite-scroller';

import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';
import { useTriviaList } from '../Fooks/swrApi';

function TriviaList(props) {

  const [triviaForModal, setTriviaForModal] = useState(null);


  let url;
  if (props.tagId != null) {
    url = `/tags/${props.tagId}/pages`;
  }
  else {
    url = '/trivias/list';
  }

  const { data, error } = useTriviaList(url, 1);
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

  function loadFunc() {
    console.log('hoge');
  }
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {triviasList.map((trivia) => {
        return (
          <div className="mb-3" key={trivia._id}>
            <TriviaCard trivia={trivia} onClickTriviaCard={onClickTriviaCard} />
            <TriviaModal trivia={trivia} isOpen={triviaForModal === trivia._id} onClose={onCloseModal} />
          </div>
        );
      })}
      </InfiniteScroll>
    </>
  );

}

TriviaList.propTypes = {
  tagId: PropTypes.string,
};

export default TriviaList;
