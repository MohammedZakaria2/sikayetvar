import React from 'react';

const DetailsItem = ({ type = 'text', label, value }) => {
  return (
    <div className="details_item">
      <p className="details_item_label">{label}</p>
      {type === 'text' ? (
        <p className="details_item_value">{value}</p>
      ) : (
        <a
          href={`https://${value}`}
          target="_blank"
          className="details_item_value"
          rel="noreferrer"
        >
          {value}
        </a>
      )}
    </div>
  );
};

export default DetailsItem;
