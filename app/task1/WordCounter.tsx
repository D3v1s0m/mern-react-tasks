'use client';

import React, { useState } from 'react';
import styles from './wordcounter.module.css';

export default function WordCounter() {
    const [text, setText] = useState<string>('');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

    return (
        <div className={styles.centeredContainer}>
            <h1>Responsive Paragraph Word Counter</h1>
            <div>
                <textarea
                    rows={20}
                    cols={70}
                    value={text}
                    onChange={handleTextChange}
                />
            </div>
            <div>
                Word Count: {wordCount}
            </div>
        </div>
    );
}
