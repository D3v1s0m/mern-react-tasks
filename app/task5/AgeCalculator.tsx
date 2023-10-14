'use client'

import React, { useEffect, useState } from 'react';
import styles from './AgeCalculator.module.css';
import CountdownTimer from './CountdownTimer';

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState<number | null>(null);
    const [nextBirthdayTime, setNextBirthdayTime] = useState<number | null>(null);
    const [timerActive, setTimerActive] = useState(false);

    const calculate = () => {
        const today = new Date();
        const birthDateObject = new Date(birthDate);
        if (isNaN(birthDateObject.getTime())) {
            setAge(null);
            setNextBirthdayTime(null);
            return;
        }
        const age = today.getFullYear() - birthDateObject.getFullYear();

        const currentMonth = today.getMonth();
        const birthMonth = birthDateObject.getMonth();
        const currentDay = today.getDate();
        const birthDay = birthDateObject.getDate();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            setAge(age - 1);
        } else {
            setAge(age);
        }
        // set the next birthday time
        const nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
        if (today.getTime() > nextBirthday.getTime()) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
        setNextBirthdayTime(nextBirthday.getTime());
        !timerActive && setTimerActive(true);
    };

    const handleTimerEnd = () => {
        setTimerActive(false);
    };

    return (
        <div className={styles.container}>
            <h1>Age Calculator</h1>
            <input
                className={styles.input}
                type="date"
                value={birthDate}
                onChange={event => setBirthDate(event.target.value)}
            />
            <button className={styles.button} onClick={calculate}>Calculate</button>
            {age !== null && (
                <p>You are {age} years old.</p>
            )}
            {age === null && (
                <p>Please enter your birth date.</p>
            )}
            {nextBirthdayTime !== null && (
                <div className={styles.timer} >
                    <CountdownTimer targetTime={nextBirthdayTime} onTimerEnd={handleTimerEnd} />
                    <p>until your next birthday.</p>
                </div>
            )}
            {nextBirthdayTime !== null && !timerActive && (
                <p>Happy Birthday!</p>
            )}
        </div>
    );
}