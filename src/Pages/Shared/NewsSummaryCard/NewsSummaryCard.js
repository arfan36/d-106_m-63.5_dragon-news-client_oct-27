import React from 'react';

const NewsSummaryCard = ({ news }) => {
    return (
        <div className='my-3'>
            {news.title}
        </div>
    );
};

export default NewsSummaryCard;