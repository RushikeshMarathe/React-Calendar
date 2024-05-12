import React from 'react';

const Calendar = ({ currentMonth, currentYear }) => {
    // Function to get the first day of the month
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    // Function to get the number of days in the month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateDays = () => {
        const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const days = [];
        let day = 1;
    
        // Get the current date
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
    
        // Iterate over 6 weeks
        for (let i = 0; i < 6; i++) {
            const week = [];
            // Iterate over 7 days (a week)
            for (let j = 0; j < 7; j++) {
                // If it's before the first day of the month or after the last day, render an empty cell
                if ((i === 0 && j < firstDay) || day > daysInMonth) {
                    week.push(<td key={`${i}-${j}`} className="px-6 py-3"></td>);
                } else {
                    // Determine if the current cell represents the current date
                    const isCurrentDate = currentYear === currentDate.getFullYear() &&
                        currentMonth === currentDate.getMonth() &&
                        day === currentDay;
                    // Apply conditional styling
                    const cellClassName = `lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 xs:px-2 xs:py-3 text-center border-2 font-bold hover:bg-white hover:text-slate-900 ${isCurrentDate ? 'bg-white text-slate-900' : ''}`;
                    week.push(<td key={`${i}-${j}`} className={cellClassName}>{day}</td>);
                    day++;
                }
            }
            // Push the week to the days array
            days.push(<tr key={i}>{week}</tr>);
            // If we've rendered all days, break the loop
            if (day > daysInMonth) break;
        }
    
        return days;
    };

    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-slate-400">
                <thead className="text-lg text-gray-900 uppercase dark:text-gray-400 bg-gray-200 text-center">
                    <tr className='border rounded-lg'>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Mon</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-l-2 border-slate-300">Sun</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Tue</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Wed</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Thu</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Fri</th>
                        <th scope="col" className="lg:px-12 lg:py-7 md:px-9 md:py-5  sm:px-6 sm:py-3 px-2 py-2 text-center border-2 lg:text-2xl md:text-xl text-xs border-t-2 border-slate-300">Sat</th>
                    </tr>
                </thead>
                <tbody className='bg-white dark:bg-gray-800 text-lg border-2'>
                    {generateDays()}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
