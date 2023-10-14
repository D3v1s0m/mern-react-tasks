import React, { useState } from 'react';
import styles from './calculator.module.css';

export default function Page() {
    const [result, setResult] = useState<string>('');
    const [input, setInput] = useState<string>('');

    const handleInput = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleDecimal = () => {
        if (input.indexOf('.') === -1) {
            setInput((prevInput) => prevInput + '.');
        }
    };

    const handleBackspace = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    return (
        <div>
            <div className={styles.calculator}>
                <input type="text" className={styles.input} value={input} readOnly />
                <div className={styles.buttons}>
                    <div className={styles.row}>
                        <button className={styles.button} onClick={clearInput}>C</button>
                        <button className={styles.button} onClick={handleBackspace}>←</button>
                        <button className={styles.button} onClick={() => handleInput('/')}>/</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button} onClick={() => handleInput('7')}>7</button>
                        <button className={styles.button} onClick={() => handleInput('8')}>8</button>
                        <button className={styles.button} onClick={() => handleInput('9')}>9</button>
                        <button className={styles.button} onClick={() => handleInput('*')}>*</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button} onClick={() => handleInput('4')}>4</button>
                        <button className={styles.button} onClick={() => handleInput('5')}>5</button>
                        <button className={styles.button} onClick={() => handleInput('6')}>6</button>
                        <button className={styles.button} onClick={() => handleInput('-')}>-</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button} onClick={() => handleInput('1')}>1</button>
                        <button className={styles.button} onClick={() => handleInput('2')}>2</button>
                        <button className={styles.button} onClick={() => handleInput('3')}>3</button>
                        <button className={styles.button} onClick={() => handleInput('+')}>+</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button} onClick={() => handleInput('0')}>0</button>
                        <button className={styles.button} onClick={handleDecimal}>.</button>
                        <button className={styles.button} onClick={calculateResult}>=</button>
                    </div>
                </div>
            </div>
            <div className={styles.result}>Result: {result}</div>
        </div>
    );
}
