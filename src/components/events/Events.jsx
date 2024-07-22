import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const ReactCalendar = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();

    const getCurrentDateString = () => {
        return `${months[currentMonth]} ${currentYear}`;
    };

    const getDayTextColor = (day) => {
        if (day === 1 || day === 15 || day === 28) {
            return 'text-[#E65F2B]';
        } else if (day === 5 || day === 20) {
            return 'text-[#E65F2B]';
        } else {
            return 'text-[#0098F1]';
        }
    };

    const renderDays = () => {
        let daysArray = [];

        for (let i = 0; i < startDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayTextColor = getDayTextColor(i);
            const isToday = i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear();
            const dayClasses = `day text-center text-3xl m-5 ${dayTextColor} ${isToday ? 'bg-[#FDE68A] rounded-full' : ''}`;

            daysArray.push(
                <div key={i} className={dayClasses}>
                    <span className="font-roboto font-medium">{i}</span>
                </div>
            );
        }

        return daysArray;
    };

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="calendar-container">
            <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-3xl text-[#E65F2B] mb-5">{getCurrentDateString()}</h2>
                    <div className="mb-5">
                        <button
                            className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent p-2"
                            onClick={goToPreviousMonth}
                        >
                            <GoChevronLeft />
                        </button>
                        <button
                            className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent p-2 ml-2"
                            onClick={goToNextMonth}
                        >
                            <GoChevronRight />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {days.map(day => (
                        <div key={day} className="text-center text-2xl text-black font-roboto font-[600]">{day}</div>
                    ))}
                    {renderDays()}
                </div>
            </div>
        </div>
    );
};

const Events = () => {
    return (
        <div className="p-5 mt-24">
            <h1 className="text-xl text-orange-500 font-medium font-roboto mb-4">
                Users List
            </h1>

            <div className="flex justify-end mb-4">
                <button className="bg-[#0098F1] text-white flex items-center rounded-lg px-6 py-3">
                    <FaPlusCircle className="text-white text-1xl mr-2" />
                    <span className="text-white font-medium text-lg">Add New User</span>
                </button>
            </div>

            <div className="flex">
                <div className="w-full md:w-8/12 bg-white rounded-lg p-4 mr-4">
                    <ReactCalendar />
                </div>

                <div className="w-full md:w-4/12 bg-[#0098F1] rounded-lg p-4 relative">
                    <div className="flex flex-col items-center justify-center">
                        <div className="rounded-full overflow-hidden w-24 h-24 md:w-40 md:h-40  flex items-center justify-center">
                            <img
                                className="rounded-full h-24 w-24 object-cover"
                                src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                                alt="User"
                            />
                        </div>
                        <h1 className="text-white text-2xl font-medium mb-1 text-center">Mounika</h1>

                        <div className="flex flex-row space-x-4 text-white">
                            <div className="font-roboto text-center text-xl">
                                <h1 className="font-medium">17</h1>
                                <h1>Completed</h1>
                            </div>
                            <div className="font-roboto text-center text-xl">
                                <h1 className="font-medium">17</h1>
                                <h1>To Do</h1>
                            </div>
                            <div className="font-roboto text-center text-xl">
                                <h1 className="font-medium">17</h1>
                                <h1>All Tasks</h1>
                            </div>
                        </div>

                        <hr className="w-full border-white my-4" style={{ opacity: '0.5' }} />

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Marketing
                            </button>
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Design Task
                            </button>
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Development
                            </button>
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Finance
                            </button>
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Meeting
                            </button>
                            <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                                Conference
                            </button>
                        </div>
                    </div>

                    <hr className="w-full border-white my-4" style={{ opacity: '0.5' }} />
                    <div className="font-roboto text-2xl mt-4">
                        <h1 className="text-white">Team</h1>
                        <div className="flex items-center ml-4">
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index}
                                    src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                                    alt={`Image ${index + 1}`}
                                    className={`w-10 h-10 rounded-full -ml-3 mt-4 z-${5 - index}`}
                                    style={{ zIndex: 5 - index }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
