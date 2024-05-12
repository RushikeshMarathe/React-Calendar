import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentMonth, currentYear, onPrevClick, onNextClick }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handlePrevClick = () => {
    if (onPrevClick) {
      onPrevClick();
    }
  };

  const handleNextClick = () => {
    if (onNextClick) {
      onNextClick();
    }
  };

  const displayMonth = months[currentMonth % 12];

  return (
    <div className='flex justify-evenly items-center px-4 py-2 bg-gray-200 rounded-lg xs:px-6  sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full '>
      <button onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faAngleLeft} size="xl" />
      </button>
      <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>{`${displayMonth} ${currentYear}`}</span>
      <button onClick={handleNextClick}>
        <FontAwesomeIcon icon={faAngleRight} size="xl" />
      </button>
    </div>
  )
}

export default Pagination;
