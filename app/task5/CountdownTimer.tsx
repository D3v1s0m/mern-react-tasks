import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: number;
  onTimerEnd: () => void;
}

export default function CountdownTimer(props: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(props.targetTime - Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(props.targetTime - Date.now());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      props.onTimerEnd();
    }
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div>
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </div>
  );
}
