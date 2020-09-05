import React, { useState } from 'react';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';

import appContainer from '@containers/appContainer';
import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';

function TriviaList() {

  const [triviaForModal, setTriviaForModal] = useState(null);

  const { apiGet } = appContainer.useContainer();
  const { data, error } = useSWR('/trivias/list', () => apiGet('/trivias/list', { page: 1 }));

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
      Skeletons.push(<Skeleton key={index} className="box-fix-aspect mb-5" />);
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

export default TriviaList;
