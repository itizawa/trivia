
import React from 'react';
import PropTypes from 'prop-types';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationWrapper(props) {
  const { activePage, totalItemsCount, pagingLimit } = props;

  // calc totalPageNumber
  const totalPage = Math.floor(totalItemsCount / pagingLimit) + (totalItemsCount % pagingLimit === 0 ? 0 : 1);

  let paginationStart = activePage - 2;
  let maxViewPageNum = activePage + 2;
  // if pagiNation Number area size = 5 , pageNumber is calculated here
  // activePage Position calculate ex. 4 5 [6] 7 8 (Page8 over is Max), 3 4 5 [6] 7 (Page7 is Max)
  if (paginationStart < 1) {
    const diff = 1 - paginationStart;
    paginationStart += diff;
    maxViewPageNum = Math.min(totalPage, maxViewPageNum + diff);
  }
  if (maxViewPageNum > totalPage) {
    const diff = maxViewPageNum - totalPage;
    maxViewPageNum -= diff;
    paginationStart = Math.max(1, paginationStart - diff);
  }

  /**
    * generate Elements of Pagination First Prev
    * ex.  <<   <   1  2  3  >  >>
    * this function set << & <
    */
  const renderFirstPrev = (activePage) => {
    const paginationItems = [];
    if (activePage !== 1) {
      paginationItems.push(
        <PaginationItem key="painationItemFirst">
          <PaginationLink first onClick={() => { return props.changePage(1) }} />
        </PaginationItem>,
        <PaginationItem key="painationItemPrevious">
          <PaginationLink previous onClick={() => { return props.changePage(activePage - 1) }} />
        </PaginationItem>,
      );
    }
    else {
      paginationItems.push(
        <PaginationItem key="painationItemFirst" disabled>
          <PaginationLink first />
        </PaginationItem>,
        <PaginationItem key="painationItemPrevious" disabled>
          <PaginationLink previous />
        </PaginationItem>,
      );
    }
    return paginationItems;
  };

  /**
   * generate Elements of Pagination First Prev
   *  ex. << < 4 5 6 7 8 > >>, << < 1 2 3 4 > >>
   * this function set  numbers
   */
  const renderPaginations = (activePage, paginationStart, maxViewPageNum) => {
    const paginationItems = [];
    for (let number = paginationStart; number <= maxViewPageNum; number++) {
      paginationItems.push(
        <PaginationItem key={`paginationItem-${number}`} active={number === activePage}>
          <PaginationLink onClick={() => { return props.changePage(number) }}>
            {number}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return paginationItems;
  };

  /**
   * generate Elements of Pagination First Prev
   * ex.  <<   <   1  2  3  >  >>
   * this function set > & >>
   */
  const renderNextLast = (activePage, totalPage) => {
    const paginationItems = [];
    if (totalPage !== activePage) {
      paginationItems.push(
        <PaginationItem key="painationItemNext">
          <PaginationLink next onClick={() => { return props.changePage(activePage + 1) }} />
        </PaginationItem>,
        <PaginationItem key="painationItemLast">
          <PaginationLink last onClick={() => { return props.changePage(totalPage) }} />
        </PaginationItem>,
      );
    }
    else {
      paginationItems.push(
        <PaginationItem key="painationItemNext" disabled>
          <PaginationLink next />
        </PaginationItem>,
        <PaginationItem key="painationItemLast" disabled>
          <PaginationLink last />
        </PaginationItem>,
      );
    }
    return paginationItems;

  };

  const getListClassName = () => {
    const listClassNames = [];

    const { align } = props;
    if (align === 'center') {
      listClassNames.push('justify-content-center');
    }
    if (align === 'right') {
      listClassNames.push('justify-content-end');
    }

    return listClassNames.join(' ');
  };

  return (
    <React.Fragment>
      <Pagination size="sm" listClassName={getListClassName()}>
        {renderFirstPrev(activePage)}
        {renderPaginations(activePage, paginationStart, maxViewPageNum)}
        {renderNextLast(activePage, totalPage)}
      </Pagination>
    </React.Fragment>
  );
}


PaginationWrapper.propTypes = {
  activePage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  pagingLimit: PropTypes.number.isRequired,
  align: PropTypes.string,
};
PaginationWrapper.defaultProps = {
  align: 'center',
};

export default PaginationWrapper;
