import React, { useEffect } from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';

import appContainer from '@containers/appContainer';
import Link from 'next/link';
import TagIcon from '../commons/icons/TagIcon';

function TagLabels(props) {
  const { apiGet } = appContainer.useContainer();
  const { triviaId } = props;

  const { data, error } = useSWR(`/trivias/${triviaId}/tags`, () => apiGet(`/trivias/${triviaId}/tags`));

  useEffect(() => {
    if (data == null) { return }
    // generate hash tag
    const hashTag = data.map(item => `${item.tag.name}`);
    props.onSetHashTags(hashTag.join('%2C'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (error) return <div>failed to retrieve tags</div>;
  if (!data) return <Skeleton width={100} />;


  return (
    <>
      <span className="mr-2">
        <TagIcon />
      </span>
      {data.map((item) => {
        return (
          <Link key={item.tag._id} href={`/tags/${item.tag._id}`}>
            <span className="badge rounded-pill bg-teal mr-1 py-1 px-2 cursor-pointer">
              {item.tag.name}
            </span>
          </Link>
        );
      })}
    </>
  );
}

TagLabels.propTypes = {
  triviaId: PropTypes.string.isRequired,
  onSetHashTags: PropTypes.func,
};


export default TagLabels;
