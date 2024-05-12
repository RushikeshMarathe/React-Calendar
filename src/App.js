import React, { useState } from 'react';
import Calendar from "./component/Calendar";
import Heading from "./component/Heading";
import Pagination from "./component/Pagination";

function App() {
  // Initialize state for current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Function to handle navigation to previous month
  const handlePrevClick = () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Function to handle navigation to next month
  const handleNextClick = () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="h-full w-full relative max-w-[1200px] mx-auto mt-6 flex flex-col gap-5 ">
      <Heading/>
      <div className="px-10"> {/* Add padding here */}
        <Pagination 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
          onPrevClick={handlePrevClick} 
          onNextClick={handleNextClick} 
        />
      </div>
      <Calendar currentMonth={currentMonth} currentYear={currentYear} />
    </div>
  );
}

export default App;
