import React, { useState, useEffect } from 'react';


const MiniCalendar = () => {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const updateDate = () => setToday(new Date());
        const timer = setInterval(updateDate, 60000); 
        return () => clearInterval(timer);
    }, []);

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = today.getDate();
    const day = weekDays[today.getDay()];
    const month = allMonths[today.getMonth()];
    const year = today.getFullYear();

    return (
        <div className="hero">
            <div className="calendar">
                <div className="left">
                    <p id="date">{date < 10 ? "0" : ""}{date}</p>
                    <p id="day">{day}</p>
                </div>
                <div className="right">
                    <p id="month">{month}</p>
                    <p id="year">{year}</p>
                </div>
            </div>
        </div>
    );
};

export default MiniCalendar;
