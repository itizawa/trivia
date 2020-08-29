import React from 'react';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';

import appContainer from '@containers/appContainer';
import TriviaCard from '@components/commons/TriviaCard';

function TriviaList() {

  const { apiGet } = appContainer.useContainer();
  const { data, error } = useSWR('/trivias/list', () => apiGet('/trivias/list', { page: 1 }));

  if (error) return <div>failed to load</div>;
  if (!data) return <Skeleton height={400} />;

  const triviasList = data?.docs;
  return (
    <>
      {triviasList.map((trivia) => {
        return (
          <div className="mb-3" key={trivia._id}>
            <React.Suspense fallback={<p>...loading</p>}>
              <TriviaCard trivia={trivia} />
            </React.Suspense>
          </div>
        );
      })}
    </>
  );

}

export default TriviaList;
