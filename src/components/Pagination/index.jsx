import React from 'react';

const Pagination = ({ isLoading, page, prev, next, list, latestPost }) => {
  return (
    <div className="pagination_buttons">
      <button
        className="pagination_button"
        disabled={page !== 1 ? false : true || isLoading}
        onClick={prev}
      >
        {'< Prev'}
      </button>
      <span className="pagination_button">{page}</span>
      <button
        className="pagination_button"
        disabled={
          (list && list[list?.length - 1].id === latestPost) || isLoading
        }
        onClick={next}
      >
        {'Next >'}
      </button>
    </div>
  );
};

export default Pagination;
